import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
    code: String,
    discount: Number,
    expirationDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["unused", "used", "expired", "canceled"],
      default: "unused",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    // các trạng thái
    // "Chưa sử dụng"(unused)
    // "Đã sử dụng" (used)
    // "Hết hạn"(expired)
    // "Đã hủy" (canceled)
  },
  { versionKey: false, timestamps: true }
);
export default mongoose.model("Voucher", voucherSchema);
