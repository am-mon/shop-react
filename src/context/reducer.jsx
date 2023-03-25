export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isSameItemExisted = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isSameItemExisted) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "EMPTY_CART":
      return {
        cart: [],
      };

    default:
      return state;
  }
};
