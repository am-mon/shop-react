import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const api = await fetch(`https://dummyjson.com/products`);
    const data = await api.json();
    setProducts(data.products);
    // console.log(data.products);
    setIsLoading(false);
  };

  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { products, isLoading, search, setSearch, state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
