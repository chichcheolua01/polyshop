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
        card_holder_name: String,
        card_number: Number,
        start_date: String,
        end_date: String,
        cvv: Number,
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
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
