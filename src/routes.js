import { Router } from "express";
import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import multer from "multer";
import uploadConfiguration from "./config/upload";

const router = new Router();
const upload = multer(uploadConfiguration);

router.post("/sessions", SessionController.store);

router.post("/houses", upload.single('thumbnail'), HouseController.store);

export default router;