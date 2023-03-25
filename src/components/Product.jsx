import React from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Button from "./Button";

const Product = (props) => {
  const { id, thumbnail, title, price } = props;

  const { dispatch } = StateContextCustom();

  return (
    <div className="box-border p-5 bg-white rounded shadow-[0_10px_15px_6px_rgba(0,0,0,0.3)] shadow-gray-200 text-center text-sm md:text-base">
      <div className="flex h-[120px] justify-center items-center mb-4 md:h-[200px]">
        <img src={thumbnail} className="max-w-[100%] max-h-[100%]" />
      </div>
      <h2 className="mb-2">{title}</h2>
      <p className="font-light text-gray-500">${price}</p>
      <div className="flex justify-center mt-3">
        <div className="mr-2">
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: props });
            }}
            className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-3 rounded leading-tight"
          >
            Add to Cart
          </button>
        </div>
        <div>
          <Link to={`/products/${id}`}>
            <Button>View More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
