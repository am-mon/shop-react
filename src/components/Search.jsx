import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Loader from "./Loader";
import Product from "./Product";
import PageTemplate from "./PageTemplate";

const Search = () => {
  const { name } = useParams();
  const { products, search, isLoading } = StateContextCustom();

  const filter = products.filter((pd) =>
    pd.title.toLowerCase().includes(name.toLocaleLowerCase())
  );
  // console.log(filter);

  return (
    <PageTemplate>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {filter.length >= 1 ? (
              <div>
                <h2 className="mb-5 text-lg">Search Results:</h2>
                <div className="grid grid-cols gap-7 md:grid-cols-3 lg:grid-cols-4">
                  {filter?.map((product) => {
                    return <Product key={product.id} {...product} />;
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center text-xl min-h-[40vh] flex items-center justify-center">
                No result found for "{name}"
              </div>
            )}
          </div>
        </div>
      )}
    </PageTemplate>
  );
};

export default Search;
