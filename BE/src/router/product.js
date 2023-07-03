import express from "express";
import { getAll } from "../controller/product";

const router = express.Router();

router.get("/", getAll);

export default router;
