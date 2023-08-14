import express from "express";

import { create, getAll, getOne } from "../controller/cart";

import { checkPermission } from "../middleware/checkPermission";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
// router.patch("/:id", checkPermission, update);
// router.delete("/:id", checkPermission, remove);

export default router;
