import express from "express";

import { favorite } from "../controller/favorites";
import { loginMiddleware } from "../middleware/loginPermission";

const router = express.Router();

router.post("/:id", loginMiddleware, favorite);

export default router;
