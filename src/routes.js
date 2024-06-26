import { Router } from "express";
import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import multer from "multer";
import upload from "./config/upload";
import House from "./models/House";

const routes = new Router();

const uploadConfig = multer(upload)

routes.post('/sessions', SessionController.store)

routes.post('/houses', uploadConfig.single('thumbnail'), HouseController.store)

routes.get("/houses/:id", HouseController.listHouseById);

routes.get('/houses', HouseController.index)

routes.put('/houses/:id', uploadConfig.single('thumbnail'), HouseController.update);

routes.delete('/houses/:id', HouseController.destroy);

export default routes;

