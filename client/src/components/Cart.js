import React,{createContext,useState} from 'react'

export const CartContext=createContext()

export function CartProvider({children}){
    const[cart,setCart]=useState([])

    const addToCart=(product)=>{
        setCart(currentCart=>[...currentCart,product])
    }

    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}