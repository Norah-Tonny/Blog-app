import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterContainer = styled.div`
display:flex;
justify-content:space-around;
background:skyBlue;
padding:3em;
color:#06283D;

`
const FooterUl = styled.ul`
margin:3em;

jusify_content:space-between; 
`
const FooterList = styled.li`
list-style-type:none;
font-size:1rem;
margin:1em;

font-weight:bold;

`
const ContactText = styled.div`

font-size:1rem;
font-weight:bold;`

const FooterHeading = styled.h1`
font-size:1.5rem;
font-weight:bold;`


const FooterPara = styled.p`
color:#2C3639;
font-size:1rem;
font-weight:bold;`


const Footer = () => {
    return (
      <FooterContainer>
        
        {/* <FooterUl>
        <FooterHeading>
        Blog
        </FooterHeading>
      </FooterUl> */}




      <FooterUl>
        <FooterHeading>
        Menu
        </FooterHeading>
        <FooterList>Home</FooterList>
        <FooterList>Add Blog</FooterList>
          <FooterList>Login</FooterList>
          <FooterList>SignIn</FooterList>
      </FooterUl>

      <FooterUl>
      <FooterHeading>
       TOOLS
       </FooterHeading>
        <FooterList>Profile</FooterList>
        <FooterList>Name</FooterList>
        <FooterList> Create Blog</FooterList>
     
      </FooterUl>
      
      <FooterUl>
      <FooterHeading>
      Loving Blog?
          </FooterHeading>
          <FooterPara>You can follow our social here:</FooterPara>
      <ContactText>{<CallIcon />} Call: 0712345678</ContactText>
          <ContactText>{<EmailIcon />} Email:blog@gmail.com</ContactText>
          <ContactText>{<InstagramIcon />}blogtextContent </ContactText>
      </FooterUl>
      
    </FooterContainer>
  
    )
}
export default Footer; 