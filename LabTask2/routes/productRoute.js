const express = require('express');
const {uploadProduct , getProductById , getProducts , deleteProductById , getOneProductPerCategory ,getProductByCategory} = require('../controllers/productController');
const router = express.Router();
const apiauth = require("../middleware/apiauth");

router.post('/upload', apiauth ,uploadProduct);
router.get('/getProducts', getProducts);
router.get('/getProductById/:id', getProductById);
router.delete('/deleteProductById/:id', deleteProductById);
router.get('/getProductByCategory/:category', getProductByCategory);
router.get('/getOneProductPerCategory', getOneProductPerCategory);

module.exports = router;