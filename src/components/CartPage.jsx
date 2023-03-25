import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Button from "./Button";
import CartItem from "./CartItem";
import PageTemplate from "./PageTemplate";

const CartPage = () => {
  const [mainTotal, setMainTotal] = useState(0);
  const {
    dispatch,
    state: { cart },
  } = StateContextCustom();
  // console.log(cart);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increaseTotalPrice = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotalPrice = (price) => {
    setMainTotal(mainTotal - price);
  };

  const afterRemoveMainTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  const total = () => cart.reduce((pv, cv) => pv + cv.price, 0);
  // console.log(total);

  return (
    <PageTemplate>
      <div className="max-w-[1000px] mx-auto">
        {cart.length === 0 ? (
          <div className="text-center">
            <h3 className="text-xl mb-7">Your cart is empty!</h3>
            <Link to="/">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        ) : (
          <div>
            {" "}
            {cart?.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseTotalPrice={increaseTotalPrice}
                  decreaseTotalPrice={decreaseTotalPrice}
                  afterRemoveMainTotal={afterRemoveMainTotal}
                />
              );
            })}
            <div className="flex justify-between py-5">
              <button
                onClick={() => dispatch({ type: "EMPTY_CART" })}
                className="min-w-[130px] bg-blue-900 hover:bg-blue-800 text-white py-2 px-3 rounded leading-tight"
              >
                Empty Cart
              </button>
              <div className="w-[80%] box-border pl-[5%] flex justify-end items-start font-medium text-xl">
                Total: ${mainTotal}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default CartPage;
