import express from "express";
import { create, getAll, update } from "../controller/comment";

const router = express.Router();

router.get("/", getAll);
router.post("/:id", create);
router.patch("/:id", update);


export default router;
