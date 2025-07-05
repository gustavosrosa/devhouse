import { Router } from "express";
import SessionController from "./controllers/SessionController";

const router = new Router();

router.post("/sessions", SessionController.store);

export default router;