import styled from "styled-components";
import { useState,useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axiosInstance from "../axiosAPI.js";
import { useNavigate } from 'react-router';
import LoginContext from "../Context/LoginState.js";



const Container = styled.div`
  background: #256d85;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  color: #06283d;
`;

const Button = styled.button`

  width:10%;
padding:.5em 1em;
font-size:1rem;
color:#06283D;
background:skyBlue;
border:3px solid #06283D;
border-radius:6px;
cursor:pointer;
margin:2em;
 
`
const Input = styled.input`
  padding: 1em 3em;
  width: 30%;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 3em;
  color: #06283d;
  
`;
const LoginHead = styled.h3`
  text-align: center;
  font-weight: 2em;
  font-size: 2rem;
  color: #06283d;
`;
const Label = styled.label`
  font-size: 2rem;
  font-weight: 3em;
`;

const ShowPassword = styled.div`
  align-items: center;
  padding-right:2em;
`;
const PasswordShower = styled.div``;
const InputPasswordContain = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background:white;
border-radius:6px;
// width:35%;
padding:.4em .5em;
border:2px solid red;
`;
const InputContain = styled.div`
background:skyBlue;
`;
const Inputs = styled.input`
padding:1em 3em;
border:none;
outline:none;
width:29vw;

`
const LoginItems = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
   username: "",
    password: "",
    
  })
 
  const [message, setMessage] = useState({
    usernameError: "",
    passwordError: ""
   
  })
  const { isLogged } = useContext(LoginContext)
    const [isLogin, setLogin] = isLogged
    
  

  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    
    axiosInstance.post('/token/obtain', {
      username: values.username,
      password: values.password
    })
      .then((result) => {
        axiosInstance.defaults.headers['Authorization'] = "JWT" + result.data.access;
        localStorage.setItem('access_token', result.data.access);
        localStorage.setItem('refresh', result.data.refresh);
        localStorage.setItem('username', result.data.username);
        localStorage.setItem('email',result.data.email)
        console.log(result)
        if( result.status==200)
          navigate('/')
          isLogin.is_Login=true
      
      })
        
      .catch(error => {
        console.log(error)
      })
     
    const handleLoginInputChange = (event) => {
      setValues({ ...values, Login: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (values.Email && values.password && values.Login) {
      }
    };

    if (values.username === '') {
      setMessage(prev=>({ ...prev, message, usernameError: 'Username is required' }))
    }

    if (values.password === '') {
      setMessage (prev=>({ ...prev,message, passwordError: 'password is required' }))
    }
   
  }
  
  return (
    <Container>
      <LoginContainer>
        <LoginHead>Login</LoginHead>
        <Label>User Name</Label>
        <Input type="text" placeholder="User name" onChange={(e) => setValues({ ...values, username: e.target.value })} />
        <p style={{color:'red'}}>{ message.usernameError}</p>
        

        <InputPasswordContain>
          <InputContain>
            <Inputs
              onChange={(e)=>setValues({ ...values, password: e.target.value })}
              value={values.password}
              type={show ? "text" : "password"}
              placeholder="Password"
            />
        
          </InputContain>

          <PasswordShower>
            <ShowPassword onClick={() => setShow((prev) => !prev)}>
              {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </ShowPassword>
          </PasswordShower>
        </InputPasswordContain>
        <p style={{color:'red'}}>{ message.passwordError}</p>


        

        <Button className="btn" onClick={handleLogin}>Login</Button>
      </LoginContainer>
    </Container>
  );
};

export default LoginItems;
