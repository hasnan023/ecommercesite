// store/reducers/cartReducer.js

const initialState = {
  items: typeof localStorage !== "undefined"
    ? localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")):
    [] :null,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Creating a new array with the existing items and the new payload
      const updatedItems = [...state.items, action.payload];
      // Update local storage with the updated items
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };

    // Add more cases if needed
    default:
      return state;
  }
};

export default cartReducers;
