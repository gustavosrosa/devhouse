import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import { config } from "dotenv";
import path from "path";

class App {
    constructor() {
        config();
        this.server = express();
        mongoose.connect(process.env.MONGODB_URI)
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use('/files', express.static(path.resolve(__dirname, "..", "uploads")));
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;