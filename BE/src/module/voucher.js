import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    // value: { type: Number, required: true },
    voucherType: { type: String }, // %, 100k, freeship
    usageLimit: { type: Number },
    applicableCategories: { type: [String] },
    // freeShipping: { type: Boolean },
    startDate: { type: Date },
    endDate: { type: Date },
    status: {
        type: String,
        enum: ['active', 'expired'],
        default: 'active'
    },
}, { versionKey: false, timestamps: true });
export default mongoose.model('Voucher', voucherSchema);