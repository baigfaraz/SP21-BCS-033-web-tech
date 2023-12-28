const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        product_name: {
            type: String,
            required: true,
        },
        product_image: {
            type: String,
        },
        product_price: {
            type: Number,
            required: true,
            default: 0,
        },
        product_quantity: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Cart", cartSchema);
