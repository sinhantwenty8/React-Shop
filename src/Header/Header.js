import React from 'react'
import {Navbar,Nav,Container, Badge} from 'react-bootstrap'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import { useAuth } from '../Context/AuthContext'


export default function Header() {
    const {amountOfItem} = useCart()
    const {currentUser,logOut} = useAuth()
    const logOutHandler = function(e){
        e.preventDefault()
        logOut()
        
    }
    console.log({amountOfItem})
    return (
        <div>
           <header>
                <Navbar bg="light" variant="light" className ={style.sticky}>
                    <Container className={style.con}>
                        <Navbar.Brand href="/dashboard" className = {style.bold}>Dejavu</Navbar.Brand>
                        <Nav className="me-auto">
                        <div className = {style.nav}>
                            {currentUser && <NavLink  variant="outline-dark" to="/dashboard" className = {style.link}>Home</NavLink >}
                            {currentUser && <NavLink  className = {style.link} to="/cart" variant="outline-dark">Cart</NavLink >}
                            {currentUser && <NavLink className = {style.link} to="/signIn" variant="outline-dark" onClick = {logOutHandler}>Log Out</NavLink >}
                            {currentUser && <NavLink className = {style.cart}  to="/cart">
                                <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-cart-ecommerce-icongeek26-flat-icongeek26.png" alt="Cart"/>
                                <Badge className ={style.badge}>{amountOfItem}</Badge>
                            </NavLink>}
                            {!currentUser && <NavLink to="/sign-up" className = {style.link}  >Sign Up</NavLink >}
                            {!currentUser && <NavLink to="/sign-in" className = {style.link}>Sign In</NavLink >}
                        </div>
                        </Nav>
                    </Container>
                </Navbar>
           </header> 
        </div>
    )
}
