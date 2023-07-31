import mongoose from "mongoose";

const favorite = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Favorite", favorite);
