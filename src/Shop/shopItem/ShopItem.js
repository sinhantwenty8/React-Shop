import React from 'react'
import {Container,Button} from 'react-bootstrap'
import style from "./ShopItem.module.css"
import {Link} from 'react-router-dom'
import { useNotification } from '../../Notification/NotificationContext'
import { useCart } from '../../Context/CartContext'


export default function ShopItem(props) {
    let id = props.items.id
    const {addToCart} = useCart()
    const {showNotification}= useNotification()

    const addToCartHandler = function(item){
        addToCart(item)
        showNotification("Successfully add to cart.")
    
    }

    return (
        <div className ="d-flex flex-column">
            <Link to = {'/item/' + id} className = 'text-decoration-none'>
                <Container className = {style.imgCon}>
                <img src ={props.items.image} className = {style.itemImage} alt={props.items.title}></img>
                <p>{props.items.title}</p>
                </Container>
            </Link>
            <Button variant="dark" size="md" className = {style.button} onClick = {addToCartHandler.bind(null,props.items)}>
                Add To Cart
            </Button>
        </div>

    )
}
