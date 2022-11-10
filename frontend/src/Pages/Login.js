import React from 'react'
import LoginItems from "../components/LoginItems"
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const LoginContainer=styled.div``
function Login() {
  return (
    <LoginContainer>
      <Nav/>
          <LoginItems/>
          <Footer/>
    </LoginContainer>
  )
}

export default Login;