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