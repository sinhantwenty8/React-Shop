import {createContext,useContext } from "react"
import { useState,useEffect} from "react"


const CartContext = createContext({
    cart : {},
    addToCart : ()=>{},
    removeFromCart : ()=>{},
    amountOfItem : 0
})


export const useCart = function(){
    return useContext(CartContext)
} 

export const CartProvider = function(props){
    const [cart,setCart] = useState([])
    const [amountOfItem,setAmountOfItem] = useState(0)
    console.log(amountOfItem)
    const setAmountOfItemHandler = function(){
        setAmountOfItem(cart.reduce((acc,cartItem)=>{return acc+cartItem.count},0 ))}

    const findItem = function(itemId){
        cart.forEach((cartItem) =>{console.log(cartItem.id === itemId)})
        const foundItem = cart.filter((cartItem)=>cartItem.id === itemId)
        console.log({foundItem})
        return foundItem
    }

    const addToCart = function(item){
        item.count? item.count++ :item.count = 1
        const itemInCart = findItem(item.id)
        if(itemInCart.length > 0){
            const newCart = cart.map((cartItem)=>{
                if(itemInCart[0].id === cartItem.id){
                    cartItem = item
                }
                console.log(cartItem)
                return cart
            })
            setCart(...newCart)

        }else{
            const newCart = [...cart,item]
            setCart(newCart)
            console.log(cart)
        }
        setAmountOfItemHandler()
    }

    const removeFromCart = function(item){
        const itemInCart = findItem(item.id)
        if(!itemInCart) return
        if(itemInCart[0].count > 1){
            item.count--
            const newCart = cart.map((cartItem)=>{
                if(itemInCart[0].id === cartItem.id){
                    cartItem = item
                }
                console.log(cartItem)
                return cart
            })
            setCart(...newCart)

        }else{
            const newCart = cart.filter((cartItem)=>cartItem.id !== item.id)
            setCart(newCart)
            console.log(cart)
        }
        setAmountOfItemHandler()
    }

    useEffect(() => {
        setAmountOfItemHandler()
    }, [cart,setAmountOfItemHandler,addToCart,removeFromCart])

    const cartValue = {
        cart,
        addToCart,
        removeFromCart,
        amountOfItem
    }

    return(
        <CartContext.Provider value ={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}