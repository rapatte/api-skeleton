import express from 'express';
import config from './src/config/env';
import Server from './src/config/server';
import routes from './src/modules';
import middlewares from './src/config/middlewares';
import db from './src/config/db';

const http = express();
const api = new Server(http);
api.middlewares(middlewares);
api.routes(routes);

(async () => {
    try {
        await db.associateAll(db.sequelize.models);
        await db.sequelize.sync({ alter: true });
        await api.start(config.appPort);
    } catch (e) {
        console.error(e);
    }
})();
