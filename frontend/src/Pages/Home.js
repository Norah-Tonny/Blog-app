import styled from "styled-components"
import HomeItems from "../components/HomeItems";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


const HomeContainer = styled.div``


function Home() {
  return (
      <HomeContainer>
        <Nav />
        <HomeItems />
        
        <Footer />
      </HomeContainer>
    
  );
}

export default Home;
