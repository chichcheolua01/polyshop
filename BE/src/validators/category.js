import joi from "joi";
import { errorMessages } from "./component/function";

export const categorySchema = joi.object({
    brand: joi.string().required().messages(errorMessages("Tên")),
    slug: joi.string().required().messages(errorMessages("Slug")),
});
