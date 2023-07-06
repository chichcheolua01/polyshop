import express from "express";
import { getAll, getOne, update } from "../controller/favorites";

const router = express.Router();

router.get("/", getAll);
router.get("/:userId", getOne);

router.put("/:userId", update);



export default router;
