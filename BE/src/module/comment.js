import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
    },
    prefer: {
      type: Number,
    },
    feed_back: [
      {
        prefer: Number,
        comment: String,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

commentSchema.virtual("name", {
  ref: "User",
  localField: "user",
  foreignField: "_id",
  justOne: true,
  select: "name",
});

export default mongoose.model("Comment", commentSchema);
