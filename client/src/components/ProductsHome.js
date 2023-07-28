import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { Link } from "react-router-dom";
function ProductsHome() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="w-full bg-gray-100 p-4 flex flex-col gap-4 items-center">
      <div className="flex gap-2 text-4xl items-center py-5">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          OUR BEST SELECTIONS
        </h1>
      </div>
      <div className="flex w-3/5 justify-evenly flex-wrap items-center m-auto gap-4">
        {/* {Array(6)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))} */}
        {products.slice(0, 6).map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <Link to="/products">
        <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
          <i className="fa-solid fa-calendar-days mr-2"></i>See all Products
          <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </Link>
    </div>
  );
}

export default ProductsHome;