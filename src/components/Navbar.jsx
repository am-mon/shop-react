import React, { useEffect, useState } from "react";
import { BsShopWindow } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const { search, setSearch } = StateContextCustom();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  useEffect(() => {
    setSearch("");
    setShowSearch(false);
  }, [location]);

  const {
    state: { cart },
  } = StateContextCustom();

  return (
    <div className="bg-blue-900 fixed top-0 left-0 right-0">
      <div className="container mx-auto box-border p-4">
        <div className="flex justify-between items-center">
          <div className="w-[30%]">
            <Link to="/">
              <BsShopWindow className="text-white text-5xl" />
            </Link>
          </div>
          <div className="w-[70%] flex justify-end items-center">
            <div className="nav-search-wrap flex items-center">
              <div className={`${showSearch ? `search-show` : `search-hide`}`}>
                <form onSubmit={onSubmitHandler}>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="p-2 rounded outline-0"
                  />
                </form>
              </div>
              <span onClick={() => setShowSearch(!showSearch)}>
                <HiOutlineSearch className="text-white text-3xl ml-3 cursor-pointer" />
              </span>
            </div>

            <div className="nav_cart_wrap mr-3">
              <Link to="/cart">
                <span className="nav_cart_count text-white text-sm">
                  {cart.length}
                </span>
                <AiOutlineShoppingCart className="text-white text-3xl ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
