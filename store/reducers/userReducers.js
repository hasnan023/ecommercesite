const initialState = {
  user:
    typeof localStorage !== "undefined"
      ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {}
      : null,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      //localStorage.setItem("user", JSON.stringify(action.payload));
      // return action.payload;

      const { email } = action.payload;
      localStorage.setItem("user", JSON.stringify(email));
      return { ...state, user: { email } };

    case "LOGOUT":
      localStorage.setItem("user", null);
      return null;

    default:
      return state;
  }
};

export default userReducers;
