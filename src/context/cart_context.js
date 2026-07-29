import { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from "react";
import reducer from "../reducer/cartReducer";

const CART_STORAGE_KEY = "ProductCart:v1";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem(CART_STORAGE_KEY);
  if (localCartData === "null") {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = useCallback((id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  }, []);

  // increment and decrement the product

  const setDecrease = useCallback((id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  }, []);

  const setIncrement = useCallback((id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  }, []);

  // to remove the individual item from cart
  const removeItem = useCallback((id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }, []);

  // to clear the cart
  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  // to add the data in localStorage
  // get vs set

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  }, [state.cart]);

  const contextValue = useMemo(
    () => ({
      ...state,
      addToCart,
      removeItem,
      clearCart,
      setDecrease,
      setIncrement,
    }),
    [state, addToCart, removeItem, clearCart, setDecrease, setIncrement]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
