import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    sold: {
        type: Number
    },
    stars: {
        type: Number
    },
    inventory: {
        type: Number,
        required: true
    },
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

    description: {
        type: String,
        required: true
    },
    image: [
        {
            base_url: {
                type: String,
                required: true,
            }
        },
    ],
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
},
    { timestamps: true, versionKey: false }
)
export default mongoose.model('Product', productSchema)