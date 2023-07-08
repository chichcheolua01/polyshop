import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ProductRouter from "./router/product";
import CategoryRouter from "./router/category";
import AuthRouter from "./router/auth";
import CommentRouter from "./router/comment";
import contactRouter from "./router/contact";
import ChangePasswordRouter from "./router/changePassword";
import paymentRouter from "./router/payment";
import FavoriteRouter from "./router/favorites";

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
app.use("/", paymentRouter);

mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
