import React, { useState,useEffect,createContext } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    isLoggedIn: '',
    getLoggedIn: ()=> {},
    LogoutUser: ()=> {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn,setIsLoggedIn] = useState(undefined);
    const navigate = useNavigate();

  async function getLoggedIn(user) {
        //const loggedInRes = await axios.get('http://localhost:4000/login');
        //console.log(user);
        setIsLoggedIn(user);
    }

    async function logoutUser() {
        const res = await axios.get('http://localhost:4000/auth/logout');
        if (res.status === 200) {
            console.log('Logged Out Successfully');
            setIsLoggedIn(undefined);
        }
    }

    useEffect(() => {
        getLoggedIn();
    }, []);


    return (
        <AuthContext.Provider value={{ isLoggedIn, getLoggedIn,logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;