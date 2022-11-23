import Footer from "../components/Footer";
import LogoutItems from "../components/LogoutItems";
import Nav from "../components/Nav";
import styled from "styled-components";
const Container = styled.div``
const LogOut = () => {
    return (
        <Container>
            <Nav />
            <LogoutItems/>
            <Footer/>
        </Container>
    )
}
export default LogOut;