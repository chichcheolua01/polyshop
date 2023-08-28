import express from "express";

import { getCartByUser, addCart } from "../controller/cart";

import { loginMiddleware } from "../middleware/loginPermission";

const router = express.Router();

router.get("/", loginMiddleware, getCartByUser);
router.patch("/", loginMiddleware, addCart);

export default router;
