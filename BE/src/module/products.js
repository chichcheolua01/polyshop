import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    original_price: {
        type: Number,
        min: 0,
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: false,
    },
    images: [
        {
            base_url: {
                type: String,
                required: true,
            },
            is_gallery: Boolean,
            label: {
                type: String,
                default: null,
            },
            large_url: String,
            medium_url: String,
            position: {
                type: String,
                default: null,
            },
            small_url: String,
            thumbnail_url: String,
        },
    ],
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    }
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model('Product', productSchema)