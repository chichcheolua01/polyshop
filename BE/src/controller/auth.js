import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { config } from "dotenv";
import { registerSchema } from "../validators/register";
import { loginSchema } from "../validators/login";

import Auth from "../module/auth";

config();

export const getAll = async (req, res) => {
  try {
    const users = await Auth.find();
    if (users.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách người dùng",
      });
    }

    return res.status(200).json({
      message: "Danh sách người dùng",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server " + error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const users = await Auth.findById(req.params.id)
      .populate("cards")
      .populate("comments")
      .populate("order")
      .populate("favorite");

    if (!users) {
      return res.status(404).json({
        message: "Không có thông tin người dùng",
      });
    }

    return res.status(200).json({
      message: "Thông tin người dùng",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server " + error.message,
    });
  }
};

export const register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const email = await Auth.findOne({ email: req.body.email });
    if (email) {
      return res.status(404).json({ message: "Email đã tồn tại" });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 12);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    };

    const data = await Auth.create(user);
    data.password = undefined;

    if (!data) {
      return res.status(404).json({ message: "Đăng ký thất bại" });
    }

    return res.status(200).json({
      message: "Đăng ký tài khoản thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server: " + error.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email không tồn tại" });
    }

    const passwordHash = await bcrypt.compare(password, user.password);

    if (!passwordHash) {
      return res.status(404).json({ message: "Mật khẩu không đúng" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user.password = undefined;
    return res.status(200).json({
      message: "Đăng nhập tài khoản thành công",
      data: user,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server: " + error.message });
  }
};
