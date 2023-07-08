import express from "express";
import { create, getAll, getOne, removeCard } from "../controller/card";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.delete("/:id", removeCard);
// router.patch("/:id", update);

export default router;
