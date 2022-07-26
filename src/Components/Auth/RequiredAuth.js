import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import Spinner from '../Spinner/Spinner';


const RequiredAuth = ({ children }) => {
    
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    
    if(loading){
        return <Spinner></Spinner>;
    }
    
    if(user){
        return children;
    } else{
        return <Navigate to="/signIn" state={{from: location}} replace />
    }
};

export default RequiredAuth;