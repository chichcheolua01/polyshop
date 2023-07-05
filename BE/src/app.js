import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ProductRouter from "./router/product";
import CategoryRouter from "./router/category";
import AuthRouter from "./router/auth";
import contactRouter from "./router/contact";




dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/auth", AuthRouter);
app.use("/contact",contactRouter);



mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
