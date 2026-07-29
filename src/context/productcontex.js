import { createContext, useContext, useEffect, useReducer, useMemo, useCallback } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = process.env.REACT_APP_ProductAPI;
const token = process.env.REACT_APP_ProductAuth;

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch products with useQuery — handles caching, deduplication,
  // race conditions, retries, and refetch-on-focus automatically
  const queryResult = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(API, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data),
  });

  // Sync useQuery state to the reducer for backward compatibility
  useEffect(() => {
    if (queryResult.isLoading) {
      dispatch({ type: "SET_LOADING" });
    } else if (queryResult.data) {
      dispatch({ type: "SET_API_DATA", payload: queryResult.data });
    } else if (queryResult.isError) {
      dispatch({ type: "API_ERROR" });
    }
  }, [queryResult.isLoading, queryResult.data, queryResult.isError]);

  // my 2nd api call for single product

  const getSingleProduct = useCallback(async (query) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    var Single;
    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      const singleProducts = await res.data;
      // eslint-disable-next-line array-callback-return
      singleProducts.map((item) => {
        const { id } = item;
        let ApiId = id;
        if (ApiId === query) {
          Single = singleProducts[ApiId - 1];
        }
      });
      const singleProduct = Single;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }, []);

  const contextValue = useMemo(
    () => ({ ...state, getSingleProduct }),
    [state, getSingleProduct]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
