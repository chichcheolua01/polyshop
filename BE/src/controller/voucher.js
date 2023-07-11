import Voucher from "../module/voucher";
import User from "../module/auth";
import jwt from "jsonwebtoken";
import { voucherSchema } from "../validators/voucher";

export const create = async (req, res) => {
  try {
    const { error } = voucherSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Voucher.create(req.body);

    if (!data) {
      return res.status(404).json({
        message: "Thêm voucher thất bại",
      });
    }

    return res.status(200).json({
      message: "Thêm voucher thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const vouchers = await Voucher.find();

    if (!vouchers || vouchers.length === 0) {
      res.status(404).json({
        message: "Không có danh sách voucher",
      });
    }
    res.status(200).json({
      message: "Danh sách voucher",
      data: vouchers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Voucher.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy voucher",
      });
    }

    return res.status(200).json({
      message: "Thông tin voucher",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const checkVoucher = async (req, res) => {
  try {
    const data = await Voucher.findOne({ code: req.body.code });

    if (!data) {
      return res.status(404).json({
        message: "Voucher không tồn tại",
      });
    }

    const user = await User.findOne({ vouchers: req.body.voucher });
    if (user) {
      return res.status(400).json({
        message: "Bạn đã sử dụng voucher này",
      });
    }

    if (data.apply.toString() !== req.body.apply) {
      return res.status(404).json({
        message: "Voucher không được áp dụng cho loại sản phẩm này",
      });
    }

    if (data.limit === 0) {
      return res.status(404).json({
        message: "Voucher đã hết lượt sử dụng",
      });
    }

    return res.status(200).json({
      message: "Thông tin voucher",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};
