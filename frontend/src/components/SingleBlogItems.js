
import React from 'react'
import styled from 'styled-components';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Comment = styled.div``
const Heading=styled.div``
const Container = styled.div`
margin:0 auto;
text-align:center;
padding:3em;`
const InnerContainer = styled.div``
const Paragraph=styled.p``
const HomeContainer=styled.div``
const SingleBlogItems = () => {
  let {slug}=useParams()
  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs/${slug}/`)
      .then((response) =>response.data)
 
      .then((data) => {
        setData(data);
        console.log(data)
     
      })
 
  }, [])

  return (

    <HomeContainer>
      <Container>
      <img src={data.image} width='20% ' height='50%' />
      <Paragraph>{data.bloger}</Paragraph>
      <Heading>{data.blogtitle}</Heading>
      <Paragraph>{data.blogdescription}</Paragraph>
      <Paragraph>{data.blogpost}</Paragraph>
        <Paragraph>{data.slug}</Paragraph>
        </Container>
    </HomeContainer>
  );
}

export default SingleBlogItems
