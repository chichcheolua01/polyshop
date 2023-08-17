import Cart from '../module/cart'
import User from '../module/auth'
import Product from '../module/products'
export const getAll = async (req, res) => {
    try {
        const data = await Cart.find().populate("user").populate("products.product")
        if (data.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng " })
        }
        return res.status(200).json({ message: "Tìm thấy sản phẩm trong giỏ hàng thành công", data: data })

    } catch (error) {
        return res.status(500).json({ message: "Đã có lỗi khi tìm sản phẩm trong giỏ hàng " + error.message })
    }
}
export const getOne = async (req, res) => {
    try {
        const data = await Cart.findOne({ user: req.params.id }).populate("user").populate("products.product")
        if (!data) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm trong giỏ hàng " })
        }
        return res.status(200).json({ message: "Tìm thấy sản phẩm trong giỏ hàng thành công", data: data })

    } catch (error) {
        return res.status(500).json({ message: "Đã có lỗi khi lấy sản phẩm trong giỏ hàng " + error.message })
    }
}
export const create = async (req, res) => {
    try {
        const { _id } = req.user;
        const { product, quantity } = req.body.products[0]

        let cart = await Cart.findOne({ user: _id });
        // console.log(req.user?._id);

        if (!cart) {
            // Nếu giỏ hàng không tồn tại, tạo mới
            cart = new Cart({
                user: _id,
                products: [{ product: product, quantity: quantity }],
            });
        } else {
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingProduct = cart.products.find(
                (item) => item.product?._id == product
            );

            if (existingProduct) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
                existingProduct.quantity += quantity;
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
                cart.products.push({ product: product, quantity: quantity });
            }
        }

        // Lưu giỏ hàng sau khi cập nhật
        await cart.save();
        res.status(200).json({ success: true, message: 'Sản phẩm đã được thêm vào giỏ hàng.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi thêm vào giỏ hàng.', error: error.message });
    }
}


export const updateCartItemQuantity = async (req, res) => {
    try {
        const { cartId } = req.params
        const { product, quantity } = req.body.products[0];
        // console.log(product);
        // Tìm giỏ hàng dựa trên cartId
        const cart = await Cart.findOne({ _id: cartId });
        // console.log(cart);

        if (!cart) {
            return res.status(404).json({ message: 'Không tìm thấy giỏ hàng' });
        }

        // Tìm sản phẩm trong giỏ hàng dựa trên productId
        const cartItem = cart.products.find(
            (item) => item.product?._id == product
        );

        if (!cartItem) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm trong giỏ hàng' });
        }

        // Cập nhật số lượng sản phẩm
        cartItem.quantity = parseInt(quantity, 10);

        // Lưu thay đổi vào database
        await cart.save();

        res.status(200).json({ message: 'Cập nhật số lượng sản phẩm thành công' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
};


export const removeCart = async (req, res) => {
    try {
        const cartId = req.body; // Giả sử bạn lấy cartId từ tham số URL
        const productId = req.body.products[0]; // Giả sử bạn lấy productId từ tham số URL

        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy giỏ hàng.' });
        }

        const productIndex = cart.products.findIndex(
            (item) => item.product?._id == productId
        );

        if (productIndex === -1) {
            return res.status(404).json({ success: false, message: 'Sản phẩm không tồn tại trong giỏ hàng.' });
        }

        cart.products.splice(productIndex, 1);

        await cart.save();

        res.status(200).json({ success: true, message: 'Sản phẩm đã được xóa khỏi giỏ hàng.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi xóa sản phẩm khỏi giỏ hàng. ' });
    }
}
