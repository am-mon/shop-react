import React from "react";
import { StateContextCustom } from "../context/StateContext";
import Loader from "./Loader";
import PageTemplate from "./PageTemplate";
import Product from "./Product";

const Products = () => {
  const { products, isLoading } = StateContextCustom();

  return (
    <PageTemplate>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols gap-7 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      )}
    </PageTemplate>
  );
};

export default Products;
