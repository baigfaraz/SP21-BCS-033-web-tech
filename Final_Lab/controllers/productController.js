const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const { validationResult } = require("express-validator");

// upload product
const uploadProduct = asyncHandler(async (req, res) => {
  
  const {
    product_name,
    product_category,
    product_description,
    product_price,
    product_Stock,
  } = req.body;
  try {
    

    const product = new Product({
      product_name,
      product_category,
      product_description,
      product_price,
      product_Stock: parseInt(product_Stock, 10),
    });

    const createdProduct = await product.save();
    // res.status(201).json(createdProduct);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
    // res.status(200).json({ message: "Product deleted successfully" });
    res.redirect("/");
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

// update product by id
const getUpdateProductForm = asyncHandler(async (req, res) => {
  const product_id = req.params.id;
  try {
    const product = await Product.findById(product_id);
    if (product) {
      res.render('updateProduct', { product });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const updateProductById = asyncHandler(async (req, res) => {
  const product_id = req.params.id;
  const {
    product_name,
    product_category,
    product_description,
    product_price,
    product_Stock,
  } = req.body;

  try {
    const product = await Product.findById(product_id);

    if (product) {
      product.product_name = product_name;
      product.product_category = product_category;
      product.product_description = product_description;
      product.product_price = product_price;
      product.product_Stock = product_Stock;

      const updatedProduct = await product.save();
      // res.json(updatedProduct);
      res.redirect("/");
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
  uploadProduct,
  getProducts,
  deleteProductById,
  getUpdateProductForm,
  updateProductById
};
