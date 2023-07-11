import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      sparse: true,
    },
    address: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    cards: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Card",
      },
    ],
    order: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order",
      },
    ],
    favorite: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Favorite",
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
    voucher: [
      {
        usedDate: {
          type: Date
        },
        applinedProduct: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        voucherId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Voucher'
        }
      }
    ],
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
