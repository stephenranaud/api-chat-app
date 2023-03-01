import { Router } from "express";

import * as messagesController from "../controllers/messagesController";

const router = Router();

router.get("/", messagesController.index);

export default router;
