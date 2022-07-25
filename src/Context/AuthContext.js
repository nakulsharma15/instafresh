import { useContext, createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userReducer from "./userReducer";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("Token");
  const [userDetails, dispatchUser] = useReducer(userReducer, {
    cartList: [],
    wishList: []
})

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userDetails,
        dispatchUser,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };