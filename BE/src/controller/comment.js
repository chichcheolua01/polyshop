import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../module/auth";
import Comment from "../module/comment";
import Product from "../module/products";

import { commentSchema } from "../validators/comment";

dotenv.config();

export const getAll = async (req, res) => {
    try {
        const data = await Comment.find().populate("user");

        if (!data || data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu",
            });
        }

        return res.status(200).json({
            message: "Danh sách bình luận",
            data,
        });
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Lỗi khi lấy danh sách bình luận",
        });
    }
};

export const create = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Bạn chưa đăng nhập",
            });
        }

        // const { error } = commentSchema.validate(req.body, { abortEarly: false });
        // if (error) {
        //     const errors = error.details.map((err) => err.message);
        //     return res.status(400).json({
        //         message: errors,
        //     });
        // }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.id);

        const newComment = await Comment.create({
            ...req.body,
            user: user._id,
            comment: req.body.comment

        });

        await Product.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: newComment._id } },
            { new: true }
        );

        return res.status(201).json({
            message: "Thêm bình luận thành công",
            newComment,
        });
    } catch (err) {
        console.error(err);

        // Thông báo cho client khi có lỗi xảy ra
        return res.status(500).json({
            message: "Đã có lỗi xảy ra khi bình luận",
        });
    }
};


