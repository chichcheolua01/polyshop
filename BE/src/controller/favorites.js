import Favorites from "../module/favorites";

export const getAll = async (req, res) => {
  try {
    const data = await Favorites.find()
      .populate("userId")
      .populate("productId")
      .exec();

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không có danh sách yêu thích",
      });
    }

    return res.status(200).json({
      message: "Danh sách yêu thích",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server: " + error.message,
    });
  }
};

export const getOne = async (req, res) => {
  const { userId } = req.params;

  try {
    const favorite = await Favorites.find({ userId })
      .populate("userId")
      .populate("productId")
      .exec();

    if (!favorite || favorite.length === 0) {
      return res.status(404).json({
        message: "Chưa có yêu thích",
      });
    }

    return res.status(200).json({
      message: "Thông tin yêu thích của người dùng",
      data: favorite,
    });
  } catch (error) {
    res.status(500).json({
      error: "Lỗi server " + error.message,
    });
  }
};

export const update = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;

  try {
    const favorite = await Favorites.findOne({ userId });

    if (!favorite) {
      const data = await Favorites.create({ userId, productId: [productId] });

      if (!data) {
        return res.status(404).json({
          message: "Không thêm được yêu thích",
        });
      }

      return res.status(200).json({
        message: "Thêm yêu thích thành công",
        data,
      });
    }

    if (!favorite.productId.includes(productId)) {
      favorite.productId.push(productId);

      await favorite.save();

      return res.status(200).json({
        message: "Yêu thích thành công",
        data: productId,
      });
    }

    favorite.productId = favorite.productId.filter((id) => {
      return id._id != productId;
    });

    await favorite.save();

    return res.status(200).json({
      message: "Hủy yêu thích thành công",
    });
  } catch (error) {
    res.status(500).json({
      error: "Lỗi server: " + error.message,
    });
  }
};
