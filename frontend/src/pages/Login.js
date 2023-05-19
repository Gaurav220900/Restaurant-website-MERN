import React,{useRef,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import styles from './Login.module.css';

const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
 
    const loginFormHandler = async(e) => {
        e.preventDefault();

       
        try {
            const res = await axios.post("http://localhost:4000/auth/login", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            });

            if (res.status === 200) {
                authContext.getLoggedIn();
                navigate('/allfoods');
            } else {
                throw new Error('Login Error');
            }
        }
        catch (e) {
            console.log('Cannot Login At the moment');
        }
    }


    return (
        <form onSubmit={loginFormHandler} className={styles['login-form']}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter your email" ref={emailInputRef} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" ref={passwordInputRef}/>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Login