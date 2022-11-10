import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";

const NavContainer = styled.div`
  background: skyBlue;
  color: #06283d;
`;
const InnerNav = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
const NavUl = styled.ul`
  display: flex;
  gap: 2em;
  font-weight: bold;
  font-size: 2rem;
  list-style-type: none;
`;
const InnerContain = styled.div`
  display: flex;
  align-items:center;
  border:2px solid #06283d;
  border-radius:6px;
`;
const SearchContain = styled.div`
padding-left:1em;
`;
const Input = styled.input`
  padding: 1em 3em;
  border:none;
  outline:none;
  background:skyBlue;
  font-weight:bold;
  font-size:1rem;
`;
const NavList = styled.li``;
const InputContain = styled.div``;
// const Logo = styled.h1`
//   font-size: 3rem;
// `;
const NavLeft = styled.h1`
font-size: 3rem;
font-weight:bold;
`
const NavRight = styled.div``;

const NavCenter = styled.div``;
const Nav = () => {
  return (
    <NavContainer>
    
      <InnerNav>
        <NavLeft>
          {/* <Logo className="fontFamily">BLOG</Logo> */}
          <c>
              <Link to="/">BLOG</Link>
            </c>
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
              <Link to="/">Home</Link>{" "}
            </NavList>
            <NavList>
              {" "}
              <Link to="/addblog">Add blog</Link>
            </NavList>
            <NavList>
              {" "}
              <Link to="/login">Login/SignIn</Link>
            </NavList>
          </NavUl>
        </NavRight>
      </InnerNav>
    </NavContainer>
  );
};
export default Nav;
