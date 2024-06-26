import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';
import ConnectionURL from '../connection';

class App {

    constructor() {
        this.server = express();

        // Configurações para se conectar com banco de dados
        mongoose.connect(ConnectionURL.server);

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

}

export default new App().server;