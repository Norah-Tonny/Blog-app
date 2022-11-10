import styled from "styled-components";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
width:35%;
padding:.4em .5em;

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
    Email: "",
    Password: "",
    Login: "",
  });

  const handleEmailInputeChange = (event) => {
    setValues({ ...values, Email: event.target.values });
  };
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, Password: event.target.values });
  };

  const handleLoginInputChange = (event) => {
    setValues({ ...values, Login: event.target.values });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.Email && values.Password && values.Login) {
    }
  };
  return (
    <Container>
      <LoginContainer>
        <LoginHead>Login</LoginHead>
        <Label>User Name</Label>
        <Input type="text" placeholder="User name" />
        {/* <input type="text" placeholder="Name" /> */}
        <Input
          onChange={handleEmailInputeChange}
          value={values.Email}
          type="text"
          placeholder="Email"
        />

        <InputPasswordContain>
          <InputContain>
            <Inputs
              onChange={handlePasswordInputChange}
              value={values.Password}
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

        <InputPasswordContain>
          <InputContain>
            <Inputs
              onChange={handlePasswordInputChange}
              value={values.Password}
              type={show ? "text" : "password"}
              placeholder=" Confirm Password"
            />
          </InputContain>
          <PasswordShower>
            <ShowPassword onClick={() => setShow((prev) => !prev)}>
              {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </ShowPassword>
          </PasswordShower>
        </InputPasswordContain>
        

        <Button className="btn">Login</Button>
      </LoginContainer>
    </Container>
  );
};

export default LoginItems;
