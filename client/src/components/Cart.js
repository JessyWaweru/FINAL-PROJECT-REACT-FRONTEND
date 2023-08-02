import React,{useContext} from 'react'
import { CartContext } from './CartProvider'
import ProductItem from './productItem'
import ProductDetails from './ProductDetails'

const Cart=()=>{
    const {cart}=useContext(CartContext)

    return(
        <div>
            <h1 className="text-rose-600">SEARCH HISTORY</h1>
             <ul>
                {cart.map((product,index)=>(
                   <ProductItem/>
                ))}
             </ul>
        </div>
    )
}

export default Cart