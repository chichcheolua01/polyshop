import Voucher from "../module/voucher";
import User from "../module/auth";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const create = async (req, res) => {
  try {
    const { discount, expirationDate } = req.body;

    const newVoucher = new Voucher({
      code: uuidv4(),
      discount,
      expirationDate,
    });

    await newVoucher.save();

    return res.status(201).json({
      message: "Tạo voucher  thành công",
      data: newVoucher,
    });
  } catch (err) {
    console.error("Lỗi khi tạo voucher: ", err);
    res.status(500).json({ message: "Lỗi khi tạo voucher" });
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
      message: "danh sách voucher",
      data: vouchers,
    });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách voucher: " + err.message,
    });
  }
};

export const getOne = async (req, res) => {
  const voucherCode = req.params.code;

  try {
    const voucher = await Voucher.findOne({ code: voucherCode });

    if (voucher) {
      const currentDate = new Date();
      if (voucher.expirationDate < currentDate) {
        res.status(400).json({
          message: "Voucher đã hết hạn",
        });
      } else {
        res.status(200).json({
          message: "Thông tin",
          data: voucher,
        });
      }
    } else {
      res.status(404).json({
        message: "Voucher không tồn tại",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Lỗi khi lấy voucher: " + err.message,
    });
  }
};

export const removeVoucher = async (req, res) => {
  try {
    const voucher = await Voucher.findOne({ _id: req.params.id });
    if (!voucher) {
      res.status(404).json({
        message: "Voucher không tồn tại",
      });
    } else {
      if (voucher.status === "expired" || voucher.status === "used") {
        await Voucher.findOneAndDelete({ id: voucher._id });
        return res.status(200).json({
          message: "xoa voucher thanh cong",
        });
      }
      return res.status(404).json({
        message: "Không được xóa voucher",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const updateVoucher = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    const voucher = await Voucher.findById(req.params.id);

    if (voucher.code == req.body.code) {
      const voucherUpdate = {
        ...req.body,
        status: req.body.status,
        userId: user._id,
        status: "used",
      };

      const data = await Voucher.findByIdAndUpdate(voucher._id, voucherUpdate, {
        new: true,
      });
      return res.status(200).json({
        message: "Cập nhật voucher thành công",
        data: data,
      });
    }

    return res.status(404).json({
      message: "mã code không đúng",
    });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};
