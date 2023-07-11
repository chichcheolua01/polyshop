import Card from "../module/card";
import { cardSchema } from "../validators/card";

export const getAll = async (req, res) => {
  try {
    const data = await Card.find();
    if (data.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách thẻ ngân hàng",
      });
    }
    return res.status(200).json({
      message: "Danh sách thẻ ngân hàng",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Card.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Không có thông tin thẻ ngân hàng",
      });
    }
    return res.status(200).json({
      message: "Thông tin thẻ ngân hàng",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = cardSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const card = await Card.findOne({ card_number: req.body.card_number });
    if (card) {
      return res.status(404).json({
        message: "Thẻ ngân hàng đã tồn tại",
      });
    }

    const data = await Card.create(req.body);
    if (!data) {
      return res.status(404).json({
        message: "Không thêm được thẻ ngân hàng",
      });
    }

    return res.status(200).json({
      message: "Thêm thẻ ngân hàng thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const removeCard = async (req, res) => {
  try {
    const data = await Card.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Xóa thẻ ngân hàng thành công",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};
