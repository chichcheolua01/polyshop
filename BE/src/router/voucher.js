import express from "express";
import { create, getAll, getOne, removeVoucher, updateVoucher } from "../controller/voucher";

const router = express.Router();

router.get('/', getAll)
router.get('/:code', getOne)
router.post('/', create)
router.delete('/:id', removeVoucher)
router.patch('/:id', updateVoucher)



export default router;
