import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useState } from 'react'
import style from "./SearchBar.module.css"

export default function SearchBar() {
    const [searchInput,setSearchInput] = useState("")

    return (
        <div className={style.searchBarCon}>
            <input type="text" placeholder="Search" value={searchInput} className={style.searchBar}></input>
            <Button className ={style.button}>Search</Button>
        </div>
    )
}
