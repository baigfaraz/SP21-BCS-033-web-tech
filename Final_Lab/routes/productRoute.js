const express = require('express');
const {uploadProduct  , getProducts , deleteProductById , updateProductById , getUpdateProductForm } = require('../controllers/productController');
const router = express.Router();
const check = require('../middlewares/protect.js');

router.post('/upload' ,check ,uploadProduct);
router.get('/deleteProductById/:id', deleteProductById);
router.get('/getProducts', getProducts);
router.get('/updateProductById/:id', getUpdateProductForm);
router.post('/updateProductById/:id', check ,updateProductById);

module.exports = router;