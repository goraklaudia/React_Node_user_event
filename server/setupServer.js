import express from 'express';
import http from 'http';
import prepareRoutes from './routes.js';
import prepareDatabase from './prepareDatabase.js';
import cors from 'cors';

const logRequest = (req, res, next) => {
    console.info(`${req.method} ${req.originalUrl}`);
    next();
}

const applyMiddleware = async (app) => {
    app.use(logRequest);
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json({limit: '10mb', extended: true}));
    app.use(cors());
}

const prepareServer = async () => {
    const app = express();
    const httpServer = http.createServer(app);
    const router = express.Router();
    applyMiddleware(app);

    const database = await prepareDatabase();

    prepareRoutes(router, database);
    app.use('/api', router);

    return httpServer;
}

export const startServer = async () => {
    const server = await prepareServer();
    return server.listen(4000).on('error', (err) => {
        console.log(`Server error: ${err}`);
    })
}