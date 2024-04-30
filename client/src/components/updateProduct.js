import React, { useState, useEffect } from "react";
//useState allows for managing and updating state
import { useNavigate, useParams } from "react-router-dom";
//useNavigate hook is used to navigate to different routes in your app.
//useParams provides a simple and convenient way to access URL parameters within your components
import ProductForm from "./ProductForm";

export default function UpdateProduct() {
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();
  //when you call useParams(),it returns an object containing the parameters parsed from the URL,hence the {}
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);
//useEffect hook is used to perform side effects in your functional components,such as data fetching
  //the second argument inside the parentheses is an optional dependency array;when you provide it ,React will rerun the effect whenever any of the dependencies change.If the dependency array is empty,the effect will only run once after the initial render.If you omit the dependency array,the effeect will run after every render
  
  const handleUpdateProduct = async (productDetails) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productDetails),
        }
      );
      if (response.ok) {
        // handle success case
        navigate(`/products`);
        console.log("Product updated successfully!");
      } else {
        // handle error case
        setErrorMsg("Failed to update product.");
      }
    } catch (error) {
      console.error("An error occurred while updating the product:", error);
    }
  };

  return (
    <>
      {product && (
        //the product && part means that the following jsx will only be rendered iff product is truthy,ie not null,udefined,false,epty,or zero
        
        <ProductForm
          isUpdatePage={true}
          productData={product}
          errorMsg={errorMsg}
          handleSubmit={handleUpdateProduct}
        />
      )}
    </>
  );
}
