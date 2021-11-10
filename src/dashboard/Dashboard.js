import React from 'react'
import { useAuth } from '../AuthContext/AuthContext'
import ShopDisplay from '../shopDisplay/ShopDisplay'
import style from "./Dashboard.module.css"

export default function Dashboard() {
    const {shop} = useAuth()

    return (
        <div className ={style.con}>
            {shop && <ShopDisplay item ={shop}></ShopDisplay>}
        </div>
    )
}
