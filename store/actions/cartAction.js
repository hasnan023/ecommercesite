// store/actions/cartActions.js

export const addToCart = (product) => {
    console.log(product)
  return {
    type: "ADD_TO_CART",
    payload: product,
     
  };
};

export const removeFromCart = (productId) => {
   return {
    type: "REMOVE_FROM_CART",
    payload: productId,
   }
}

export const increaseQuantity = (productId) => {
  return {
    type: "INCREASE_CART",
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: "DECREASE_CART",
    payload: productId,
  };
};

// Add more action creators if needed
