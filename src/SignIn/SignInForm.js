import React from 'react'
import { useAuth } from '../AuthContext/AuthContext'
import {Form,Button,Container,Alert,ModalTitle} from 'react-bootstrap'
import style from './SignInForm.module.css'
import { useState,useRef } from 'react'
import { useHistory } from 'react-router'

export default function SignInForm() {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const {signIn} = useAuth()
    const history = useHistory()
    const [isError,setError] = useState(null)

    const signInHandler = async function(e){
        e.preventDefault()
        try{
            let response = await signIn(emailRef.current.value,passwordRef.current.value)
            if (response.user)history.push('/dashboard')
            if(response.error) setError(response.error)
            
        }catch(error){
            setError(error.message)
        }
    }
    return (
        <Container className={style.container}>
            <Form className={style.form} >
                <ModalTitle className= 'd-flex justify-content-center'> Sign In</ModalTitle>
                <p className = 'text-align-center'>By email</p>
                <hr></hr>
                {isError && <Alert variant='danger' className ='mt-3'>{isError.message} </Alert>}
                <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                    <Form.Label className="mb-2">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="mb-2" ref={emailRef}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-5" onClick={signInHandler}>
                    Log In
                </Button>
            </Form>
        </Container>
    )
}
