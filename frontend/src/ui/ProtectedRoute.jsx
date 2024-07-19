import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts";

const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
    if (!authContext.auth?.token) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  export default ProtectedRoute;