import React from 'react'
import style from './Cart.module.css'
import { useCart } from '../CartContext/CartContext'
import CartItem from './CartItem'

export default function Cart() {
    const {cart} =useCart()
    return (
        <div className = {style.con}>
            {cart.map((cartItem)=>{
                console.log(cartItem)
           return <CartItem key={cartItem.id} item={cartItem}></CartItem>})
        }
        </div>
    )
}
