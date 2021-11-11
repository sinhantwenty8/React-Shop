import React from 'react'
import { useParams } from 'react-router'
import { useEffect ,useState} from 'react'
import style from './ItemDetail.module.css'
import { useAuth } from '../../Context/AuthContext'


export default function ItemDetail() {
    const {shop,currentUser} = useAuth()
    const param = useParams()
    const itemId = param.productId
    const [item, setItem] = useState(null)
    console.log(currentUser)
    useEffect(() => {
        if(shop){
            console.log('hi')
            setItem(shop.filter((shopItem)=>{
                return shopItem.id === +itemId
            }))
        }
    }, [shop,itemId])
    
    return (
        <div className ={style.con}>
            {item && <img src = {item[0].image} alt ={item.title}></img>}
            {item && <p>{item[0].description}</p>}
            
        </div>
    )
}
