const express = require("express");
const router = express.Router();
const {
  addToCart,
  getUserCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart
} = require("../controllers/cartController");
const apiauth = require("../middleware/apiauth");

router.post("/addToCart", apiauth, addToCart);
router.get("/getUserCart/:id", apiauth, getUserCart);
router.patch("/updateCartItemQuantity", apiauth, updateCartItemQuantity);
router.delete("/removeFromCart/:id", apiauth, removeFromCart);
router.delete("/clearCart", apiauth, clearCart);

module.exports = router;