import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { react, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import slugify from 'react-slugify';
const Container = styled.div`
background: #8758FF;
`
;
const InnerContainer = styled.div`
  margin: 0 auto;
  width: 40%;
  // border: 2px solid skyBlue;
  color: skyBlue;
  background: #8758FF;
  gap: 3em;
  padding: 3em;
  text-align: center;
`;
const Button = styled.button`
  padding: 1em 3em;
  margin-left: 3em;
  border-radius: 10px;
  background: skyBlue;
`;

const InputArea = styled.input`
  padding: 1em 1em;
  color: skyBlue;
  border-radius: 10px;
  mrgin:2em;
`;
const Input = styled.input`
width:100%;
height:5%;
padding:1.5em;
border-radius: 10px;
`
const Blogtitle = styled.div`
  margin: 2em 0;
`;

const Blogdesc = styled.div`
  margin: 2em 0;
`;

const Editors = styled.div`
margin:3em;
margin-left:1em;`

const TextareaField = styled.textarea`
  background: white;
  padding: 1em;
  border-radius: 10px;
`;
const InputBloger = styled.div`
// margin: 3em 0;
`
const ButtonPost = styled.div`
margin: 3em 0;
justify-content:flex-end;
`
const BlogInfo = styled.div`
display:flex;
flex-direction:column;
width:20%;
`
const InputSlug=styled.div``
const Bloger = styled.div`
display:flex;
justify-content:space-around;
`

const Header = styled.h1`
color:#06283d;`;
function BlogItems() {
  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    blogtitle: "",
    blogdescription: "",
    blogpost: "",
    bloger: "",
    slug:""
  
  });

  function HandleSubmit() {
    axios.post("http://127.0.0.1:8000/api/blogs/", data);
    setData({
      blogtitle: "",
      blogdescription: "",
      blogpost:"",
      bloger: "",
     slug:""
    });
    setErrorMessage(TextareaField ? "" : "edit the input field please");
  }

  useEffect(() => {
    HandleSubmit();
  }, []);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Header>Add Blog</Header>
        {/* <Header>Blog Title</Header> */}
<BlogInfo>
        <Blogtitle>
          <TextareaField
            id="writing"
            name="text"
            rows="3"
            cols="100"
            type="text"
            value={data.blogtitle}
            placeholder="Blog Title "
            onChange={(e) => setData({ ...data, blogtitle: e.target.value })}
          />
          {errorMessage && <p className="error"> {errorMessage}</p>}
        </Blogtitle>

        <Blogdesc>
          {/* <Header>Blog Description</Header> */}
          <TextareaField
            id="writing"
            name="text"
            rows="5"
            cols="100"
            value={data.blogdescription}
            placeholder="Blog Description"
            onChange={(e) =>
              setData({ ...data, blogdescription: e.target.value })
            }
          />
          {errorMessage && <p className="error"> {errorMessage}</p>}
          </Blogdesc>
          </BlogInfo>
<Editors>
        <Editor
          apiKey="zkgltmpmy54faxeho6xn0rorkgjm86udin4h8492dk62pulq"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          value={data.blogpost}
          onEditorChange={() =>
            setData({ ...data, blogpost: editorRef.current.getContent() })
          }
          init={{
            height: 500,
            width:800,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
</Editors>
        {/* <Header>Bloger</Header> */}
        <Bloger>
        <InputBloger>
        <InputArea
          id="writing"
          rows="10"
          cols="5"
          type="text"
          value={data.bloger}
          placeholder="Bloger"
          onChange={(e) => setData({ ...data, bloger: e.target.value })}
        />
        {errorMessage && <p className="error"> {errorMessage}</p>}
          </InputBloger>
          <InputSlug>
          <Input
            value={data.slug}
            placeholder="Slug" 
            onChange={(e) => setData({ ...data, slug: e.target.value })}
            />
            </InputSlug>
        </Bloger>
        <ButtonPost>
        <Button onClick={HandleSubmit}>Post</Button>
        </ButtonPost>
      </InnerContainer>
    </Container>
  );
}

export default BlogItems;
