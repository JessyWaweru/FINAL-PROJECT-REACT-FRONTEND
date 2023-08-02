import React,{useContext,useEffect,useState} from 'react'
import { CartContext } from './CartProvider'
import ProductItem from './productItem'
import ProductDetails from './ProductDetails'

const Cart=()=>{
    const {cart}=useContext(CartContext)
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
    

    return(
        <div>
            <h1 className="text-rose-600">SEARCH HISTORY</h1>
             <ul>
                {cart.map((product,index)=>(
                   <ProductItem key={product.id} {...product} />
                ))}
             </ul>
        </div>
    )
}

export default Cart