import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
    },
    limit: {
      type: Number,
    },
    apply: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "expired"],
      default: "active",
    },
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Voucher", voucherSchema);
