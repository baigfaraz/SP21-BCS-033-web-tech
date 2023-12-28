const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
      default: 0,
    },
    product_Stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
