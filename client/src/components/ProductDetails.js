import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";
import Table from "./Table";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const auth = useAuthContext();

 

  // get all product details
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  // wueh

  
 
 
  return (
    <div className="bg-https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80')`
      }}>
        <div className="mb-10">
      {/* heading */}
      <div className="bg-gray-700">
        <h1 className="uppercase py-8 text-rose-100 text-4xl font-semibold text-center">
          {product.name}
        </h1>
        <p className="text-white text-center pb-5 italic font-thin">
          {product.description}
        </p>
      </div>
      {/* body */}
      <div className="w-3/4 flex justify-between m-auto mt-8">
        <div className="flex flex-col w-3/4">
          {/* image */}
          <div>
            <img
              src={product.image || "/assets/pexels-luis-quintero-2774556.jpg"}
              alt="productDetails"
              className="h-96 w-3/4 m-auto rounded-lg"
            />
          </div>
          {/* about */}
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                About the product
              </h3>
            </div>
            <p>{product.description}</p>
          </div>
          
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                OTHER PRODUCTS YOU MIGHT LIKE;
              
              </h3>
            </div>
            {/*<div>
            {event.speakers && event.speakers.length>0 &&(
            <div className="flex justify-evenly items-center"> 
            {event.speakers.map((speaker)=>(
              <div className="flex flex-col gap-2">
                 
                 <img
                         src={speaker.image}
                         alt="speaker"
                         className="w-44 h-44 rounded-full border-4 border-gray-300"
                  
                        />
                        
                   <h3 className="text-2xl font-bold text-gray-700">NAME:---{speaker.name}---</h3>
                   <h3 className="text-2xl font-bold text-gray-700">ORGANIZATION:---{speaker.organisation}---</h3>
                   <h3 className="text-2xl font-bold text-gray-700">JOB TITLE:---{speaker.job_title}---</h3>
                  
                  
                  
                  </div>))}
              </div>)}
              
             
            </div>}
          </div>
        </div>
        {/* aside */}
        <div className="border p-2 flex flex-col gap-5 h-fit rounded-lg">
          <div className="flex gap-2">
            <h1>ECOMMERCE-RANKINGS</h1>

          <Table product={product}/>
          </div>


          <div className="flex gap-2">
            <p>Price in ksh:</p>
            <p className="font-bold">{product.price}</p>
          </div>
         
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
)
            }
export default ProductDetails
