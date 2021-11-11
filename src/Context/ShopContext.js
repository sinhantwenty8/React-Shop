import {createContext,useContext } from "react"
import { useState,useEffect} from "react"

const ShopContext = createContext({
    shop : null,
    setSearchingHandler : () => {},
    shopItemsFilter : () => {},
})

export const useShop = function(){
    return useContext(ShopContext)
} 

export function ShopProvider(props) {
    const [shop,setShopItem] = useState(null)
    const [searching,setSearching] = useState(false)

    useEffect(() => {
        const fetchItem = async function(){
            try{
                let response = await fetch('https://fakestoreapi.com/products')
                let data = await response.json()
                setShopItem(data)
                return data
            }catch(error){
                console.log(error)
            }
        }
        if(searching === false){
            fetchItem()
        }
    }, [searching])

    const setSearchingHandler = function(boolean){
        setSearching(boolean)
    }

    const shopItemsFilter = function(titleName){
        console.log(shop)
        const shopItems = shop.filter((item)=>{
            return item.title.toLowerCase().includes(titleName)
        })
        setShopItem(shopItems)
        return shopItems
    }

    const shopValue ={
        shop,
        setSearchingHandler,
        shopItemsFilter
    }

    return(
        <ShopContext.Provider value ={shopValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

