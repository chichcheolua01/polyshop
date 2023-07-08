import mongoose from 'mongoose';
const cardSchema = new mongoose.Schema({
    card_holder_name: {
        type: String,
        required: true
    },
    card_number: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    main: {
        type: Boolean
    }
})
export default mongoose.model('Card', cardSchema)