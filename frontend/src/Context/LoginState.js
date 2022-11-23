import { createContext,useState } from "react";

const LoginContext = createContext()
export const LoginState = ({ children }) => {
 const [isLogin, setLogin] = useState({
        is_Login:localStorage.getItem('access_token')?true:false,
          username: '',
     email:''
        })
    return (
        <LoginContext.Provider value={{isLogged:[isLogin, setLogin]}}>
          { children }
  
        </LoginContext.Provider>

)
}

export default LoginContext;