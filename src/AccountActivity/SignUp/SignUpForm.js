import React from 'react'
import {Form,Button,Container,Alert,ModalTitle} from 'react-bootstrap'
import style from './SignUpForm.module.css'
import { useState,useRef } from 'react'
import { useHistory } from 'react-router'
import { useAuth} from '../../Context/AuthContext'


export default function SignUpForm() {
    const [isError,setError] = useState(null)
    const passwordRef = useRef("")
    const passwordConfirmRef = useRef("")
    const emailRef = useRef('')
    const {signUp} = useAuth()
    const history = useHistory()

    const setPasswordConfirmRef = function(e){
        e.preventDefault()
        passwordConfirmRef.current.value = e.target.value
    }

    const setPasswordRef = function(e){
        e.preventDefault()
        passwordRef.current.value = e.target.value
    }

    const signUpHandler = async function(e){
        e.preventDefault()
        console.log(passwordConfirmRef.current.value,passwordRef.current.value)
        if(passwordRef.current.value === passwordConfirmRef.current.value){
            try{
                let response = await signUp(emailRef.current.value,passwordRef.current.value)
                if(response.user) history.push('/sign-in')
                if(response.error) setError({error: response.error.message})
                
                
            }catch(error){
                setError(error.message)
            }
        }else{
            setError({error:"Password not match."})
        }

    }

    return (
        <Container className={style.container}>
            <Form className={style.form}>
                <ModalTitle className= 'd-flex justify-content-center'> Sign Up</ModalTitle>
                <p className = 'text-align-center'>By email</p>
                <hr></hr>
                {isError && <Alert variant='danger' className ='mt-3'> {isError.error}</Alert>}
                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} onChange={setPasswordRef}/>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordConfirmRef} onChange={setPasswordConfirmRef}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={signUpHandler}>
                    Sign Up
                </Button>
            </Form>
        </Container>
    )
}
