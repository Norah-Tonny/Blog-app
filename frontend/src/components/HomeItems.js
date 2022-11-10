
import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useEffect,useState } from 'react';

const Heading = styled.h1`
color:#06283D;
  font-size: 2rem;
  font-weight:bold;
  padding-top:2em;
`;

const HomeContainer = styled.div`
  background: #256d85;
  color:#06283D;
  text-align:center;
  padding:3em;
  margin:0 auto;
  gap:2em;
display:flex;
`;
const Container = styled.div` 

border:3px solid skyblue;
text-align:center;
border-radius:20px;
gap:2em;
margin:2em;

`
const InnerContainer = styled.div`
margin:0 auto;
width:40%;
display:flex;
flex-direction:column;
`

const Paragraph = styled.p`
margin:3em;`;
const Comment = styled.p`
display:flex;
flex:right;
margin:3em;
`;

// const Image = styled.img`
// width:80px;
// height:80px;
// border:2px solid skyBlue;
// border-radius:30%;
// `
function HomeItems() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/blogs/')
      .then((response) =>response.data)

      .then((data) => {
        setData(data);
        console.log(data)
      })
      
      .catch((error) =>{
        console.error('Error:',error);
       });
 
}, [])
  return (
    <HomeContainer>
      <InnerContainer>
        {
          data.map((data, index) => {
        return (
          <Container key={index}>
            {/* <Image src={data.img}/> */}
            <Heading>{data.blogtitle }</Heading>
            <Paragraph>{data.blogdescription }</Paragraph>
            <Comment>{data.bloger }</Comment>
          </Container>
        );
      })}
     </InnerContainer>
    </HomeContainer>
  );
}

export default HomeItems;