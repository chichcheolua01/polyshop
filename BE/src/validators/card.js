import joi from "joi";
import { errorMessages } from "./component/function";

export const cardSchema = joi.object({
  card_holder_name: joi.string().required().messages(errorMessages("Tên card")),
  card_number: joi.string().required().messages(errorMessages("Mã số card")),
  start_date: joi.string().required().messages(errorMessages("Start date")),
  end_date: joi.string().required().messages(errorMessages("End date")),
  cvv: joi.number().required().messages(errorMessages("cvv")),
});
