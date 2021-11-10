import { useState,useContext,useEffect } from "react"
import React from 'react'

const NotificationContext = React.createContext({
    activeNotification : null,
    showNotification : () => {},
    hideNotification : () => {}
})

export const useNotification = function(){
    return useContext(NotificationContext)
}
export const NotificationContextProvider = function(props){
    const [activeNotification,setNotification] = useState(null) 

    const showNotification = function(message){
        setNotification(message)
    }

    const hideNotification = function(){
        setNotification(null)
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            hideNotification()
        },500)
        return () => {
            clearTimeout(timer)
        }
    }, [activeNotification])

    const store = {
        activeNotification,
        showNotification,
        hideNotification
    }

    return(
        <NotificationContext.Provider value = {store}>
            {props.children}
        </NotificationContext.Provider>
    )
}