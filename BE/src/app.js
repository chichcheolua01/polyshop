import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ProductRouter from "./router/product";
import CategoryRouter from "./router/category";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", ProductRouter);
app.use("/category", CategoryRouter);


mongoose.connect(process.env.DB_URL);

export const viteNodeApp = app;
