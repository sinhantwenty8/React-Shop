import React from 'react'
import { Container } from 'react-bootstrap'
import AddToCartButton from './AddToCartButton'
import style from './CartItem.module.css'

export default function CartItem(props) {
    return (
        <Container className ={style.con}>
            <div className ={style.flexCon}>
                <img src={props.item.image} alt={props.item.title} className={style.cartImg}></img>
                <h5 className={style.h5}>{props.item.title}</h5>
                <div className ={style.plusMinusButton}>
                <AddToCartButton item = {props.item} amount = {props.item.count}></AddToCartButton>
                </div>
            </div>
        </Container>
    )
}
