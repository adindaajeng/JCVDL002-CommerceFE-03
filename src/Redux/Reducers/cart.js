const init_state = {
  cartList: [],
  cartTotal: 0,
  message: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "FILL_CART":
      return { ...state, cartList: action.payload };
    case "CART_TOTAL":
      return { ...state, cartTotal: action.payload };
    case "ERROR_CART":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default reducer;
