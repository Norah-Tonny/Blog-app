import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LoginContext from "../Context/LoginState";
import { useState, useContext } from "react";
import { Container } from "bootstrap";

const NavContainer = styled.div`
  background: skyBlue;
  color: #06283d;
      @media (max-Width: 700px) {
         background:green;
         color:white; 
        }
`;
const InnerNav = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-Width: 700px) { 
    background: green;
    color:white;
    width:30%; 
    
   }
  
`;
const NavUl = styled.ul`
  display: flex;
  gap: 2em;
  font-weight: bold;
  font-size: 2rem;
  list-style-type: none;
  @media (max-Width: 700px) {

    display: flex;
    flex-direction:column;
  gap:.2em;
  font-weight: bold;
  font-size: .9rem;
  list-style-type: none;
   }
  
  
`;
const InnerContain = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #06283d;
  border-radius: 6px;
`;
const SearchContain = styled.div`
  padding-left: 1em;
`;
const Input = styled.input`
  padding: 1em 3em;
  border: none;
  outline: none;
  background: skyBlue;
  font-weight: bold;
  font-size: 1rem;
`;
const NavList = styled.li``;
const InputContain = styled.div``;

// const Logo = styled.h1`
//   font-size: 3rem;
// `;
const NavLeft = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  @media (max-Width: 700px) {
    font-size: 1.8rem;
    font-weight: bold;
   }
`;
const NavRight = styled.div``;

const NavCenter = styled.div``;
const Nav = () => {
  const { isLogged } = useContext(LoginContext);
  const [isLogin, setLogin] = isLogged;

  if (isLogin.is_Login) {
    isLogin.username = localStorage.getItem("username");
    isLogin.email = localStorage.getItem("email");
  }
  const Logout = () => {
    localStorage.clear();
    setLogin({
      is_Login: false,
      username: "",
      email: "",
    });
  };
  return (
    <NavContainer>
      <InnerNav className="Container">
        <NavLeft>
          <Link to="/">BLOG</Link>
        </NavLeft>

        <NavCenter>
          <NavUl>
            <NavList>
              <InnerContain>
                <SearchContain>
                  <SearchIcon />
                </SearchContain>
                <InputContain>
                  <Input type="Text" placeholder="Search" />
                </InputContain>
              </InnerContain>
            </NavList>
          </NavUl>
        </NavCenter>
        <NavRight>
          <NavUl>
            <NavList>
              <Link to="/">Blogs</Link>
            </NavList>

            {isLogin.is_Login ? (
              <div>
                <NavList>
                  <Link to="/addblog">Add blog</Link>
                </NavList>
              </div>
            ) : (
              <div>
                <NavList>
                  <Link to="/login">Add blog</Link>
                </NavList>
              </div>
            )}

            {isLogin.is_Login ? (
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  {" "}
                  <NavList>
                    <Link to="/profile">Profile</Link>
                  </NavList>
                </div>
                <div>
                  <NavList>
                    <Link to="/logout">Logout</Link>
                  </NavList>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "2rem" }}>
                <div>
                  <NavList>
                    {" "}
                    <Link to="/register">Register</Link>
                  </NavList>
                </div>
                <div>
                  <NavList>
                    <Link to="/login">LogIn</Link>
                  </NavList>
                </div>
              </div>
            )}
          </NavUl>
        </NavRight>
      </InnerNav>
    </NavContainer>
  );
};
export default Nav;
