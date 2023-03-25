import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Button from "./Button";
import CartItem from "./CartItem";
import PageTemplate from "./PageTemplate";

const CartPage = () => {
  const [mainTotal, setMainTotal] = useState(0);
  const {
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
              <Button>Go to Shop</Button>
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
            <div className="flex py-5">
              <div className="w-[20%] font-medium text-xl">Total</div>
              <div className="w-[80%] box-border pl-[5%] flex justify-between items-start font-medium text-xl">
                ${mainTotal}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default CartPage;
