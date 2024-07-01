import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children, user}) =>{
    console.log(user);
    return user ? children : <Navigate to="/"></Navigate>;
}