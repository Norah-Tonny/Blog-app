import styled from "styled-components";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axiosInstance from "../axiosAPI.js";
import { Link } from "react-router-dom";
const Container = styled.div`
background: #8758FF;
`;
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  color: #06283d;
`;

const Button = styled.button`
  width: 10%;
  padding: 0.5em 1em;
  font-size: 1rem;
  color: #06283d;
  background: skyBlue;
  border: 3px solid #06283d;
  border-radius: 6px;
  cursor: pointer;
  margin: 2em;
`;
const Input = styled.input`
  padding: 1em 3em;
  width: 30%;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 3em;
  color: #06283d;
`;
const RegisterHead = styled.h3`
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
  padding-right: 2em;
`;
const PasswordShower = styled.div``;
const InputPasswordContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 6px;
  width: 35%;
  padding: 0.4em 0.5em;
`;
const InputContain = styled.div`
  background: skyBlue;
`;
const Inputs = styled.input`
  padding: 1em 3em;
  border: none;
  outline: none;
  width: 29vw;
`;
const RegisterItems = () => {
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
    emailError: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/user/create", {
        username: details.username,
        email: details.email,
        password: details.password,
      })
      .then((response) => {
        console.log(response);
      });

    if (details.username === '') {
      setError({ error, usernameError: 'Username is required' })

    }



  if (details.email === '') {
    setError(prev => ({ ...prev, error, emailError: 'please enter the email' }))
  }

  if (details.password === '') {
    setError(prev => ({ ...prev, error, passwordError: 'password is required' }))
  }
};
  return (
    <Container>
      <RegisterContainer>
        <RegisterHead>Register</RegisterHead>
        <Label>User Name</Label>
        <Input
          type="text"
          placeholder="User name"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
        <p style={{ color: "red" }}>{error.usernameError}</p>

        <Input
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          type="text"
          placeholder="Email"
        />
        <p style={{color:'red'}}>{ error.emailError}</p>

        <InputPasswordContain>
          <InputContain>
            <Inputs
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
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
        <p style={{color:'red'}}>{ error.passwordError}</p>

        <Button className="btn" onClick={handleRegister}><Link to='/login'>
          Register
          </Link>
        </Button>
      </RegisterContainer>
    </Container>
  );
};

export default RegisterItems;
