import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@auth";

export const PublicRoutes = ({ children }) => {

   const { authState } = useContext( AuthContext );

   return ( !authState.logged )
      ? children
      : <Navigate to="/marvel" />
}