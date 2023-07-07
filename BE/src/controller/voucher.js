import voucher from "../module/voucher";
import Voucher from "../module/voucher";
import { v4 as uuidv4 } from 'uuid'
export const create = async (req, res) => {
    const { discount, expirationDate } = req.body;

    const newVoucher = new Voucher({
        code: uuidv4(), // Sử dụng UUID để tạo mã voucher duy nhất
        discount,
        expirationDate
    });

    try {
        await newVoucher.save();
        res.status(201).json({ message: 'Voucher đã được tạo thành công', data: newVoucher });
    } catch (err) {
        console.error('Lỗi khi tạo voucher: ', err);
        res.status(500).json({ message: 'Lỗi khi tạo voucher' });
    }
};
export const getAll = async (req, res) => {
    try {
        const vouchers = await Voucher.find();
        if (vouchers.length === 0) {
            res.status(404).json({ message: 'Không lấy được danh sách voucher' });
        }
        res.status(200).json({ message: 'Lấy voucher thành công', data: vouchers });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách voucher: ' + err.message });
    }
}

export const getOne = async (req, res) => {
    const voucherCode = req.params.code;

    try {
        const voucher = await Voucher.findOne({ code: voucherCode });

        if (voucher) {
            // Kiểm tra hạn của voucher
            const currentDate = new Date();
            if (voucher.expirationDate < currentDate) {
                res.status(400).json({ message: 'Voucher đã hết hạn' });
            } else {
                res.status(200).json({ message: 'lay voucher thanh cong ', data: voucher });

            }
        } else {
            res.status(404).json({ message: 'Voucher không tồn tại' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Lỗi khi lấy voucher: ' + err.message });
    }
}
// xóa voucher
export const removeVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.findOne({ _id: req.params.id })
        if (!voucher) {
            res.status(404).json({ message: "Voucher không tồn tại" })
        } else {
            if (voucher.status === 'expired' || voucher.status === 'used') {
                await Voucher.findOneAndDelete({ id: voucher._id })
                return res.status(200).json({ message: "xoa voucher thanh cong" })
            }
            return res.status(404).json({ message: "Không được xóa voucher" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
}
// cập nhật trạng thái voucher
export const updateVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.findOne({ _id: req.params.id })
        if (!voucher) {
            res.status(404).json({ message: "Voucher không tồn tại" })
        } else {
            const voucherUpdate = {
                ...req.body,
                status: req.body.status
            }
            // console.log(voucherUpdate);
            const data = await Voucher.findByIdAndUpdate(voucher._id, voucherUpdate, { new: true })
            return res.status(200).json({ message: 'Cập nhật voucher thành công', data: data })
        }
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
}