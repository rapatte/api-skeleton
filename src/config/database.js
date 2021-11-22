import dotenv from 'dotenv';
// import { Sequelize } from 'sequelize';

dotenv.config();

const config = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    jwtSecret: process.env.JWT_SECRET,
    appPort: process.env.APP_PORT || 8080,
};

// const sequlize = new Sequelize(
//     config.dbName,
//     config.dbUser,
//     config.dbPassword,
//     { dialect: 'mysql', port: config.dbPort, host: config.dbHost }
// )
