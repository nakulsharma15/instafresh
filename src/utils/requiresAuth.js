import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("Token");

  return token ? children :

    <Navigate to="/login" state={{ from: location }} replace />

};

export default RequireAuth;