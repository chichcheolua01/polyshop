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
    },
    cards: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Card",
      },
    ],
    order: [
      {
        products: [
          {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            quantity: Number,
          },
        ],
        totalPrice: Number,
        status: String,
      },
    ],
    favorite: [
      {
        userId: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
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
