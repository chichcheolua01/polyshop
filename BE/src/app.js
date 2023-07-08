import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
  AuthRouter,
  CategoryRouter,
  ChangePasswordRouter,
  CommentRouter,
  ContactRouter,
  FavoriteRouter,
  OrderRouter,
  ProductRouter,
  VoucherRouter,
  CardRouter,
} from "./router";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/auth", AuthRouter);
app.use("/comment", CommentRouter);
app.use("/contact", contactRouter);
// đổi mật khẩu
app.use("/", ChangePasswordRouter);
app.use("/favorites", FavoriteRouter);
app.use("/voucher", VoucherRouter);

app.use("/order", OrderRouter);

// thẻ ngân hàng
app.use("/card", CardRouter);

mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
