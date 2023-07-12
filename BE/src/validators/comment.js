import joi from "joi";

import { errorMessages } from "./component/function";

export const commentSchema = joi.object({
  product: joi.string().optional().messages(errorMessages("Sản phẩm")),
  user: joi.string().optional().messages(errorMessages("Người dùng")),
  stars: joi.number().messages(errorMessages("Đánh giá")),
  comment: joi.string().messages(errorMessages("Bình luận")),
});
