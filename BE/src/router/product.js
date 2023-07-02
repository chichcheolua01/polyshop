import express from "express";
import { getAll } from "../component/product";

const router = express.Router();

router.get("/", getAll);

export default router;
