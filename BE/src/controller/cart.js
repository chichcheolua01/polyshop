import Cart from '../module/cart'
import User from '../module/auth'
import Product from '../module/products'
export const getAll = async (req, res) => {
    try {
        const data = await Cart.find().populate("user").populate("products")
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
        const data = await Cart.findById(req.params.id).populate("user").populate("products")
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
        const users = await User.findById(req.body.user)
        const cart = await Cart.findById(req.body.user)
        const pro = await Product.findById(req.body.products.product)
        if (!cart) {
            const newCart = {
                user: users,
                products: [
                    {
                        product: pro,
                        quantity: req.body.products.quantity,
                    }
                ]
            }
            const data = await Cart.create(newCart)
            if (!data) {
                return res.status(404).json({ message: "Không thêm được sản phẩm vào trong giỏ hàng" })
            }
            return res.status(200).json({ message: "Thêm sản phẩm vào trong giỏ hàng thành công", data: data })
        }
        if (!cart.products.product._id) {
            const newCart = await Cart.findByIdAndUpdate(
                req.body.products.product,
                { $push: { products: [{ product: pro._id, quantity: req.body.products.Product.quantity }] } },
                { new: true }
            );
            return res.status(200).json({ message: "Thêm sản phẩm vào trong giỏ hàng thành công", data: newCart })

        } else {
            const newCart = await Cart.findByIdAndUpdate(req.body.products.product, cart.products.quantity + req.body.products.quantity, { new: true })
            return res.status(200).json({ message: "Thêm sản phẩm vào trong giỏ hàng thành công", data: newCart })

        }
    } catch (error) {

    }
}