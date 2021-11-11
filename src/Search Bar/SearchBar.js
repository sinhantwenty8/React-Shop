import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useState ,useEffect} from 'react'
import { useShop } from '../Context/ShopContext'
import style from "./SearchBar.module.css"

export default function SearchBar() {
    const [searchInput,setSearchInput] = useState("")
    const {shopItemsFilter,setSearchingHandler}= useShop()

    const userInput = function(e){
        console.log(e.target.value)
        
        setSearchInput(e.target.value)
        setSearchingHandler(true)
    }

    useEffect(() => {
        if(searchInput === "") {
            setSearchingHandler(false)
            return
        }
        const filtered = shopItemsFilter(searchInput)
        console.log({filtered})
        
    }, [searchInput])

    return (
        <div className={style.searchBarCon}>
            <input type="text" placeholder="Search" value={searchInput} className={style.searchBar} onChange = {userInput}></input>
            <Button className ={style.button}><img src="https://img.icons8.com/ios/24/000000/search--v1.png"/></Button>
        </div>
    )
}
