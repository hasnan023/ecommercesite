import { useToast } from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  items:
    typeof localStorage !== "undefined"
      ? localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items")).map((item) => ({
            ...item,
            quantity: item.quantity || 0, // Initialize quantity to 0 if not present
          }))
        : []
      : null,
};

console.log(initialState);

const cartReducers = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
       toast.success("product added into your cart", {
         position: "bottom-left",
       });
      }
       console.log(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };

    // Create a new array with the existing items and the new payload

    case "REMOVE_FROM_CART":
      // Filter out the item to be removed from the items array
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
       toast.error("Removed product from cart", {
         position: "bottom-left",
       });
      
      // Update local storage with the filtered items
      localStorage.setItem("items", JSON.stringify(filteredItems));
      return {
        ...state,
        items: filteredItems,
      };

    case "INCREASE_CART":
      const updatedProducts = state.items.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: Math.max(0, product.quantity + 1) }
          : product
      );
       toast.success("Increased product quantity by 1", {
         position: "bottom-left",
       });
      // Update localStorage
      localStorage.setItem("items", JSON.stringify(updatedProducts));
       console.log(updatedProducts)
      return {
        ...state,
        items: updatedProducts,
      };

    case "DECREASE_CART":
      const updatedDecProducts = state.items.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      );
       toast.info("decreased product quantity by 1", {
         position: "bottom-left",
       });
      // Update localStorage
      localStorage.setItem("items", JSON.stringify(updatedDecProducts));

      return {
        ...state,
        items: updatedDecProducts,
      };

    // Add more cases if needed
    default:
      return state;
  }
};

export default cartReducers;
