const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel");

// @desc    Add to cart
// const addToCart = async (userId, productData) => {
//   try {
//     const cartItem = new Cart({
//       user_id: userId,
//       product_name: productData.product_name,
//       product_image: productData.product_image,
//       product_price: productData.product_price,
//       product_quantity: 1,
//     });

//     const savedCartItem = await cartItem.save();
//     return savedCartItem;
//   } catch (error) {
//     throw error;
//   }
// };
const addToCart = asyncHandler(async (req, res) => {
  const { user_id, product_name, product_image, product_price } = req.body;
  const cartItem = new Cart({
    user_id,
    product_name,
    product_image,
    product_price,
    product_quantity: 1,
  });
  const savedCartItem = await cartItem.save();
  res.json(savedCartItem);
}
);

// @desc    Get user cart
// const getUserCart = async (userId) => {
//   try {
//     const userCart = await Cart.find({ user_id: userId });
//     return userCart;
//   } catch (error) {
//     throw error;
//   }
// };
const getUserCart = asyncHandler(async (req, res) => {
  const userCart = await Cart.find({ user_id: req.params.id }).populate('user_id');
  res.json(userCart);
}
);

// update cart item quantity
// const updateCartItemQuantity = async (cartItemId, newQuantity) => {
//   try {
//     const updatedCartItem = await Cart.findByIdAndUpdate(
//       cartItemId,
//       { $set: { product_quantity: newQuantity } },
//       { new: true }
//     );

//     return updatedCartItem;
//   } catch (error) {
//     throw error;
//   }
// };

const updateCartItemQuantity = asyncHandler(async (req, res) => {
  const updatedCartItem = await Cart.findByIdAndUpdate(
    req.params.id,
    { $set: { product_quantity: req.body.product_quantity } },
    { new: true }
  );
  res.json(updatedCartItem);
}
);

// remove from cart
// const removeFromCart = async (cartItemId) => {
//   try {
//     const removedCartItem = await Cart.findByIdAndRemove(cartItemId);
//     return removedCartItem;
//   } catch (error) {
//     throw error;
//   }
// };

const removeFromCart = asyncHandler(async (req, res) => {
  const removedCartItem = await Cart.findByIdAndDelete(req.params.id);
  res.json(removedCartItem);
}
);

// clear cart

// const clearCart = async (userId) => {
//   try {
//     const clearedCart = await Cart.deleteMany({ user_id: userId });
//     return clearedCart;
//   } catch (error) {
//     throw error;
//   }
// };

const clearCart = asyncHandler(async (req, res) => {
  const clearedCart = await Cart.deleteMany({ user_id: req.params.id });
  res.json(clearedCart);
}
);

module.exports = {
  addToCart,
  getUserCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
};
