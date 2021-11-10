import React from 'react'
import { Container } from 'react-bootstrap';
import ShopItem from '../shopItem/ShopItem'
import style from "./ShopDisplay.module.css"


export default function ShopDisplay(props) {
    return (
        <div>
            <Container className = {style.shopCon}>
            {props.item.map((item)=>{
                return <ShopItem key = {item.id} items = {item}></ShopItem>;
                
            })}
            </Container>
        </div>
        
    )
}
