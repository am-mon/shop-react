import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import Loader from "./Loader";
import PageTemplate from "./PageTemplate";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productLoading, setProductLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setProductLoading(true);
    const api = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await api.json();
    setProduct(data);
    // console.log(data);
    setProductLoading(false);
  };

  return (
    <PageTemplate>
      {productLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center">
          <div className="w-[100%] md:w-[50%] lg:w-[50%] box-border px-0 md:pr-7 mb-5 ">
            <img src={product.thumbnail} className="w-[100%]" />
          </div>
          <div className="w-[100%] md:w-[50%] lg:w-[50%] box-border px-0 pr-2 md:pl-7 mb-5 ">
            <h1 className="text-2xl mt-2">{product.title}</h1>
            <p className="mt-2 text-gray-400 text-sm">{product.category}</p>
            <p className="my-5 text-3xl">${product.price}</p>
            <p className="mt-2">Available Stocks: {product.stock}</p>
            <p className="mt-5 mb-4">{product.description}</p>
            {/* <Button>Add to Cart</Button> */}
            <Link to="/">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </div>
      )}
    </PageTemplate>
  );
};

export default Detail;
