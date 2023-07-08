import express from "express";
import { create, getAll, getOne, remove, update } from "../controller/product";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.delete("/:id", remove);
router.patch("/:id", update);



export default router;
