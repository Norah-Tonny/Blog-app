import styled from "styled-components";
import { useState, useContext } from "react";
import LoginContext from "../Context/LoginState";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Container = styled.div`
margin:2em;
border-radius:7px;
padding:3em;
`
const Heading = styled.h2`
`

const Button = styled.button`
padding:.5em 2em;
font-weight:bold;
font-size:1rem;
margin:2em;
cursor:pointer;

`
const InnerContainer = styled.div`
margin:0 auto;
width:50%;
border:2px solid skyBlue;
padding:3em;
border-radius:7px;
text-align:center;
`
const LogoutItems = () => {
    const { isLogged } = useContext(LoginContext)
    const [isLogin, setLogin] = isLogged
    
   let navigate=useNavigate()
    const Logout = () => {
        localStorage.clear()
        setLogin({
            is_loggedIn: false,
            username: '',
            email: '',
        })
        navigate('/')
      
    }
    return (
        <Container>
        
            <InnerContainer>
                    <Heading>Are you sure you want to LogOut?</Heading>
                   
                            <Button onClick={Logout}>Yes, I'm sure</Button>
                           
                    <Button ><Link to='/'>No,take me back</Link></Button>
                 
              
            </InnerContainer>
         
       </Container>
    )
}
export default LogoutItems;
