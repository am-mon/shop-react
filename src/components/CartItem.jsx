import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import { StateContextCustom } from "../context/StateContext";

const CartItem = ({
  item,
  increaseTotalPrice,
  decreaseTotalPrice,
  afterRemoveMainTotal,
}) => {
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = StateContextCustom();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotalPrice(item.price);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    increaseTotalPrice(item.price);
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    afterRemoveMainTotal(item.price * quantity);
  };

  const oneItemPrice = quantity * item.price;

  return (
    <div className="flex border-b-[1px] py-5">
      <div className="w-[20%]">
        <img src={item.thumbnail} />
      </div>
      <div className="w-[80%] box-border pl-[5%] flex justify-between items-start">
        <div className="w-[60%]">
          <p className="font-medium text-sm md:text-base mb-2">{item.title}</p>
          <p className="text-gray-400 ">${item.price}</p>
        </div>
        <div className="w-[40%] text-right">
          <div>
            <button
              onClick={decreaseQuantity}
              className="bg-blue-900 hover:bg-blue-800 text-white h-[25px] w-[25px] rounded text-sm"
            >
              -
            </button>
            <span className="w-[30px] inline-block text-center">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="bg-blue-900 hover:bg-blue-800 text-white h-[25px] w-[25px] rounded text-sm"
            >
              +
            </button>
          </div>
          <div className="flex justify-end items-center mt-3 ">
            <p className="font-medium">${oneItemPrice}</p>
            <button
              onClick={removeItem}
              className="text-base md:text-[1.4em] text-gray-400 hover:text-blue-800 ml-2"
            >
              <ImBin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
