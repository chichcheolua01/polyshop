import express from "express";

import { create, getAll, getOne, remove, update } from "../controller/card";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;
