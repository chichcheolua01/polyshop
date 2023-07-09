import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
