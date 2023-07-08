import Favorites from '../module/favorites'
export const getAll = async (req, res) => {
    try {
        const data = await Favorites.find().populate('userId').populate('productId').exec()
        if (data.length === 0) {
            return res.status(404).json({
                message: 'Không tìm thấy sản phẩm yêu thích'
            })
        }
        return res.status(200).json({
            message: 'Tìm sản phẩm yêu thích thành công',
            data: data
        })
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
}
export const getOne = async (req, res) => {
    const { userId } = req.params;


    try {
        const favorite = await Favorites.find({ userId }).populate('userId').populate('productId').exec();
        if (favorite) {
            return res.status(200).json({ message: 'Lấy được sản phẩm yêu thích thành công', data: favorite });
        } else {
            return res.status(404).json({ message: 'Không lấy được sản phẩm yêu thích' });

        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server ' + error.message });
    }
}

export const update = async (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body; // Assume productId is a single product ID

    try {
        const favorite = await Favorites.findOne({ userId });

        if (!favorite) {
            // Nếu yêu thích chưa tồn tại, tạo mới
            const data = await Favorites.create({ userId, productId: [productId] });

            if (!data) {
                return res.status(404).json({ message: 'Không thêm được yêu thích' });
            }

            return res.status(200).json({ message: 'Thêm yêu thích thành công', data });
        }

        // Kiểm tra nếu productId không tồn tại trong danh sách, thì thêm nó vào
        if (!favorite.productId.includes(productId)) {
            favorite.productId.push(productId);
            await favorite.save();
            return res.status(200).json({ message: 'Thêm yêu thích thành công', data: productId });
        }

        // Nếu productId đã tồn tại trong danh sách, thì xóa nó khỏi danh sách
        favorite.productId = favorite.productId.filter((id) => {
            return id._id != productId
        });
        await favorite.save();
        return res.status(200).json({ message: 'Hủy yêu thích thành công' });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server: ' + error.message });
    }
};
