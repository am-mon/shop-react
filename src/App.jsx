import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import Detail from "./components/Detail";
import ErrorNotFound from "./components/ErrorNotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
