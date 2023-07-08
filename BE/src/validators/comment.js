import joi from "joi";
import { errorMessages } from "./component/function";

export const commentSchema = joi.object({
    // product: joi.string().optional(),
    // user: joi.string().optional(),
    comment: joi.string().messages(errorMessages("Bình luận")),
});
