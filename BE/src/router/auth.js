import express from "express";
import { getAll, getOne, logIn, register } from "../controller/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", logIn);
router.get("/", getAll);
router.get("/:id", getOne);

export default router;
