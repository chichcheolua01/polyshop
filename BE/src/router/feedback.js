import express from "express";

import { create, getAll, remove, update } from "../controller/feedback";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.delete("/:id", remove);
router.patch("/:id", update);

export default router;
