
import React from 'react';
import styled from 'styled-components'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';

const Container = styled.div`
 background:#06283d; 

background: #256d85;


`
const InnerContainer = styled.div`
margin:0 auto;
width:40%;
border:2px solid skyBlue ;
color: skyBlue;
 background: #256d85;
gap:3em;
padding:3em;
text-align:center;
`
const Button = styled.button`
  padding:1em 3em;
  margin-left:3em;
  border-radius:10px;
  background:skyBlue;`

const InputArea = styled.input`
padding:.5em 1em;
color:skyBlue;
border-radius:10px;
`

const TextareaField = styled.textarea`
background:white;
padding:1em;
border-radius:10px;`

const Header = styled.h3``
function BlogItems() {
const[errorMessage,setErrorMessage]=useState('')
  
  const [data, setData] = useState({
    blogtitle: '',
    blogdescription: '',
    bloger:'',
  });
  
 
  function HandleSubmit(){
   
    axios.post("http://127.0.0.1:8000/api/blogs/", data)
    setData({
      blogtitle: '',
      blogdescription: '',
      bloger:'',
    })
    setErrorMessage(TextareaField?'':"edit the input field please")
      }
    
    
  useEffect(() => {
    HandleSubmit()
  }, []);
  
  

  return (
    <Container>
      <InnerContainer>
        <Header>Blog Title</Header>
      
  {/* const [reset, setR] = useState('') */}
        <TextareaField id='writing'  name='text' rows='3' cols='40' type='text' value={data.blogtitle} placeholder='Blog Title ' onChange={(e) => setData({ ...data, blogtitle:e.target.value})}/>
        {errorMessage && (<p className='error'> {errorMessage }</p>)}
        <Header>Blog Description</Header>
      
      <TextareaField  id='writing' name='text' rows='5' cols='50' value={data.blogdescription} placeholder='Blog Description'  onChange={(e) => setData({ ...data,  blogdescription:e.target.value})}/>
        {errorMessage && (<p className='error'> {errorMessage }</p>)}
      <Header>Bloger</Header>
        <InputArea id='writing' rows='10' cols='5' type='text' value={data.bloger} placeholder='Bloger' onChange={(e) => setData({ ...data, bloger: e.target.value })} />
        {errorMessage && (<p className='error'> {errorMessage }</p>)}
        <Button onClick={HandleSubmit}>submit</Button>
      </InnerContainer>
  
 </Container>
  )
}

export default BlogItems;
