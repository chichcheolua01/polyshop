import Product from '../module/products'
import { productSchema } from '../validators/product';
export const getAll = async (req, res) => {
  try {
    const data = await Product.find()
    if (data.length === 0) {
      return res.status(404).json({ message: 'Không lấy được sản phẩm nào' })
    }
    return res.status(200).json({ message: 'lấy sản phẩm thành công ', data: data })

  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server: ' + error.message })
  }
};
export const getOne = async (req, res) => {
  // console.log(req.params.id);
  try {
    const data = await Product.findById(req.params.id)
    // console.log(data);
    if (!data) {
      return res.status(404).json({ message: 'Không lấy được sản phẩm nào' })
    }
    return res.status(200).json({ message: 'lấy sản phẩm thành công ', data: data })

  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server: ' + error.message })
  }
};
export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Product.create(req.body)
    if (!data) {
      return res.status(404).json({ message: 'Không thêm được sản phẩm nào' })
    }
    return res.status(200).json({ message: 'Thêm sản phẩm thành công ', data: data })

  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server: ' + error.message })
  }

}
export const remove = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id)
    if (!data) {
      return res.status(404).json({ message: 'Không xóa được sản phẩm' })
    }
    return res.status(200).json({ message: 'Xóa sản phẩm thành công ', data: data })

  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server: ' + error.message })
  }
}
export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!data) {
      return res.status(404).json({ message: 'Không cập nhật được sản phẩm' })
    }
    return res.status(200).json({ message: 'Cập nhật sản phẩm thành công ', data: data })

  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server: ' + error.message })
  }
}
