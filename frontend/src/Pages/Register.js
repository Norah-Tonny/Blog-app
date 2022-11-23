import RegisterItems from "../components/RegisterItems"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"


const Container=styled.div``

const Register = () => {
  return (
      <Container>
          <Nav/>
          <RegisterItems />
          <Footer/>
    </Container>
  )
}

export default Register;
