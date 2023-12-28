const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// upload product
const uploadProduct = asyncHandler(async (req, res) => {
  const {
    product_name,
    product_category,
    product_description,
    product_price,
    product_Stock,
    product_image,
  } = req.body;
  // console.log(req.body)
  try {
    if (!product_image) {
      return res.status(400).json({ error: "Product image is required." });
    }

    const product = new Product({
      product_name,
      product_category,
      product_description,
      product_price,
      product_Stock: parseInt(product_Stock, 10),
      product_image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get product by id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// get product by category
const getProductByCategory = asyncHandler(async (req, res) => {
  const product = await Product.find({ product_category: req.params.category });

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// get all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// delete product by id
const deleteProductById = asyncHandler(async (req, res) => {
  const product_id = req.params.id;
  console.log(product_id);

  try {
    const product = await Product.findByIdAndDelete(product_id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

const getOneProductPerCategory = async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $group: { _id: "$product_category", product: { $first: "$$ROOT" } } },
      { $replaceRoot: { newRoot: "$product" } },
    ]);

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found for any category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching one product per category:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  uploadProduct,
  getProductById,
  getProducts,
  deleteProductById,
  getProductByCategory,
  getOneProductPerCategory,
};
