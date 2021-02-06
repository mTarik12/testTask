const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./user.routers');
const knex = require('./db/knex');

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
}

async function connectDB() {
    await knex.createSchema();
}

function initRoutes() {
    app.use('/users', userRouter);
}

function listen() {
    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
}
