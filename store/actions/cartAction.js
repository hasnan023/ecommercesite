// store/actions/cartActions.js

export const addToCart = (product) => {
    console.log(product)
  return {
    type: "ADD_TO_CART",
    payload: product,
     
  };
};

// Add more action creators if needed
