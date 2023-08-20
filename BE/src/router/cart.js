import express from "express";

import { create, getAll, getOne, removeCart, updateCartItemQuantity } from "../controller/cart";

import { checkPermission } from "../middleware/checkPermission";
import { loginMiddleware } from "../middleware/loginPermission";

const router = express.Router();

router.get("/", loginMiddleware, getAll);
router.post("/:id", loginMiddleware, getOne);
router.post("/", loginMiddleware, create);
router.patch("/:cartId", checkPermission, updateCartItemQuantity);
router.delete("/:cartId/:productId", loginMiddleware, removeCart);

export default router;
