import express from "express";

import { create, getAll, update, del, getOne } from "../controller/comment";

const router = express.Router();

router.get("/", getAll);
router.get("/", getOne);
router.post("/", create);
router.patch("/:id", update);
router.delete("/", del);

export default router;
