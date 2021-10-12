import express from 'express';
import http from 'http';
import prepareRoutes from './routes.js';
import prepareDatabase from './prepareDatabase.js';

const logRequest = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`);
    next();
}

const applyMiddleware = (app) => {
    app.use(logRequest);
    app.use(express.urlencoded({
        extended: true
    }));
}

const prepareServer = () => {
    const app = express();
    const httpServer = http.createServer(app);
    const router = express.Router();

    applyMiddleware(app);

    prepareRoutes(router);
    app.use('/api', router);

    return httpServer;
}

export const startServer = () => {
    const server = prepareServer();
    server.listen(4000).on('error', (err) => {
        console.log(`Server error: ${err}`);
    })
}