import Category from '../module/category'
import { categorySchema } from '../validators/category';
export const getAll = async (req, res) => {
    try {
        const data = await Category.find()
        if (data.length === 0) {
            return res.status(404).json({ message: 'Không lấy được danh mục sản phẩm nào' })
        }
        return res.status(200).json({ message: 'lấy danh mục sản phẩm thành công ', data: data })

    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message })
    }
};
export const getOne = async (req, res) => {
    // console.log(req.params.id);
    try {
        const data = await Category.findById(req.params.id)
        // console.log(data);
        if (!data) {
            return res.status(404).json({ message: 'Không lấy danh mục được sản phẩm nào' })
        }
        return res.status(200).json({ message: 'lấy danh mục sản phẩm thành công ', data: data })

    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message })
    }
};
export const create = async (req, res) => {
    try {
        const { error } = categorySchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await Category.create(req.body)
        if (!data) {
            return res.status(404).json({ message: 'Không thêm được danh mục sản phẩm' })
        }
        return res.status(200).json({ message: 'Thêm danh mục sản phẩm thành công ', data: data })

    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message })
    }

}
export const remove = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({ message: 'Không xóa được danh mục sản phẩm' })
        }
        return res.status(200).json({ message: 'Xóa danh mục sản phẩm thành công ', data: data })

    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message })
    }
}
export const update = async (req, res) => {
    try {
        const { error } = categorySchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({ message: 'Không cập nhật được danh mục sản phẩm' })
        }
        return res.status(200).json({ message: 'Cập nhật danh mục sản phẩm thành công ', data: data })

    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server: ' + error.message })
    }
}
