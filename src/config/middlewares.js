import express from 'express';
import winston from 'winston';
import morgan from 'morgan';
import Logger from '../helpers/logger';

const logger = new Logger(winston);

const middlewares = {
    json: express.json(),
    urlencoded: express.urlencoded({ extended: false }),
    apiLogger: morgan('combined', { stream: logger.stream }),
};

export default middlewares;
export { logger };
