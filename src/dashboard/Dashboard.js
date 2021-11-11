import React from 'react'
import { useShop } from '../Context/ShopContext'
import ShopDisplay from '../Shop/shopDisplay/ShopDisplay'
import style from "./Dashboard.module.css"

export default function Dashboard() {
    const {shop} = useShop()
    console.log(shop)
    return (
        <div className ={style.con}>
            {shop && <ShopDisplay item ={shop}></ShopDisplay>}
        </div>
    )
}
