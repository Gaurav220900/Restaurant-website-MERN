import React, { useState,useEffect,createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({
    isLoggedIn: '',
    getLoggedIn: ()=> {},
    LogOutUser: ()=> {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn,setIsLoggedIn] = useState(undefined);

  async function getLoggedIn() {
        // const loggedInRes = await axios.get('http://localhost:4000/auth/login');
        // console.log(loggedInRes.data);
        // setIsLoggedIn(loggedInRes.data);
    }

    async function logoutUser() {
        // const res = await axios.get('http://localhost:4000/auth/logout');
        // if (res.status === 200) {
        //     console.log('Logged Out Successfully');
        //     getLoggedIn();
        // }
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