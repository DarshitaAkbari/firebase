import React from 'react';
import {Navigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
const ProtectedRoute = ({children}) => {
    let {user}=useUserAuth(); 
    // let user=false
    if(!user){
       return  <Navigate to="/"></Navigate>
    }
  return children;
}

export default ProtectedRoute;
