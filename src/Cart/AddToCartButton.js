import React from 'react'
import style from './AddToCartButton.module.css'
import { Form } from 'react-bootstrap'
import { useCart } from '../Context/CartContext'

export default function AddToCartButton(props) {
    const {addToCart,removeFromCart} = useCart()
    const add = function(){
        addToCart(props.item)
    }

    const minus = function(){
        removeFromCart(props.item)
    }

    return (
        <div className={style.con}>
            <button className ={style.button} onClick={add}><img src="https://img.icons8.com/ios/24/000000/plus--v2.png" alt="Add Button"/></button>
            <Form.Control type="text" placeholder="1" className ={style.input} value={props.amount} readOnly />
            <button className ={style.button} onClick={minus}><img src="https://img.icons8.com/ios/24/000000/minus.png" alt="Minus Button"/></button>
        </div>
    )
}
