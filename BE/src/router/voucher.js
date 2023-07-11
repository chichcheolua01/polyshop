import express from "express";
import { create, getAll, getOne, checkVoucher } from "../controller/voucher";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.post("/check-voucher", checkVoucher);

export default router;
