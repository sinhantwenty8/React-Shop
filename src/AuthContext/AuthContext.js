import React from 'react'
import { useState,useContext,useEffect } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { auth } from '../Auth/firebase';

export const AuthContext = React.createContext({
    currentUser : null,
    shop : null,
    userIsLoggedIn : false,
    signUp :()=>{},
    signIn :()=>{},
    logOut :()=>{},
})


export const useAuth = function(){
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [currentUser,setCurrentUser] = useState(null)
    const [shop,setShopItem] = useState(null)
    const [data,setData] = useState(localStorage.getItem('user'))

    useEffect(()=>{
        if(data){
            setCurrentUser(data)
        }
    },[data])

    useEffect(() => {
        const fetchItem = async function(){
            try{
                let response = await fetch('https://fakestoreapi.com/products')
                let data = await response.json()
                setShopItem(data)
                console.log(data)
                return data
            }catch(error){
                console.log(error)
            }
        }
        fetchItem()
    }, [])
    
    const signUp = async function(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user',user)
            setCurrentUser(user)
            return {user}
        })
        .catch((error) => {
            return {error}
        });
    }

    const signIn = async function(email,password){
        let user;
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            user = userCredential.user;
            setCurrentUser(user)
            console.log(user)
            console.log(currentUser)
            return {user}
        })
        .catch((error) => {
            return {error}
        });   
    }

    const logOut = async function(){
        return signOut(auth).then(() => {
            setCurrentUser(null)
            localStorage.removeItem("user")
            setData(null)
        }).catch((error) => {
          // An error happened.
        });
    }

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
    })
    return unsubscribe
},[])

    const context ={
        currentUser,
        shop,
        signUp,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value = {context}>
            {props.children}
        </AuthContext.Provider>
    )
}
