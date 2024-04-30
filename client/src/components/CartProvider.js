import React,{createContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const CartContext=createContext()

export function CartProvider({children}){
    const[cart,setCart]=useState([])
    const navigate=useNavigate()

    const addToCart=(product)=>{
        setCart(currentCart=>[...currentCart,product/*currentCart becomes currentCart plus product*/])
        navigate('/cart')
    }

    return(
        <CartContext.Provider /*.Provider provides a way to share values between components 
        without explicitly passing a prop through every level of the tree*/value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

