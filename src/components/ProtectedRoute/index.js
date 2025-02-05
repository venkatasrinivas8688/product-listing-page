import {Navigate,Outlet} from "react-router-dom"
import Cookies from 'js-cookie';

const ProtectedRoute=(props)=>{
    const jwtToken=Cookies.get("jwt_token");
    if(!jwtToken){
        return <Navigate to ="/login" replace/>;
    }
    return <Outlet/>;
    
}
export default ProtectedRoute