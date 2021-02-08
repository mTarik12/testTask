const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./user.routers');
const statisticRouter = require('./statistics.router');
const { createSchema } = require('./db/knex');
const cors = require('cors');

dotenv.config();
let app;
const PORT = process.env.PORT || 7000;

start();

async function start() {
    initExpress();
    initMiddlewares();
    await connectDB();
    initRoutes();
    listen();
}

function initExpress() {
    app = express();
}

function initMiddlewares() {
    app.use(express.json());
    app.use(cors());
}

async function connectDB() {
    await createSchema();
}

function initRoutes() {
    app.use('/users', userRouter);
    app.use('/users_statistics', statisticRouter);
}

function listen() {
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
}
