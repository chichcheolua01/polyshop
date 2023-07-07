import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import {
  AuthRouter,
  CategoryRouter,
  ChangePasswordRouter,
  CommentRouter,
  ContactRouter,
  FavoriteRouter,
  OrderRouter,
  ProductRouter,
  CardRouter,
} from "./router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Sản phẩm
app.use("/products", ProductRouter);

// Danh mục
app.use("/category", CategoryRouter);

// Đăng nhập, đăng ký
app.use("/auth", AuthRouter);

// Bình luận
app.use("/comment", CommentRouter);

// Hỗ trợ
app.use("/contact", ContactRouter);

// Đơn hàng
app.use("/order", OrderRouter);

// Đổi mật khẩu
app.use("/", ChangePasswordRouter);

// Yêu thích
app.use("/favorites", FavoriteRouter);
// thẻ ngân hàng
app.use("/card", CardRouter);


mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
