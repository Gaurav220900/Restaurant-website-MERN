import React,{useRef,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import styles from './Login.module.css';

const Login = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
 
    const loginFormHandler = async(e) => {
        e.preventDefault();

            axios.post("http://localhost:4000/login", {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,
            })
            .then((doc) => {
                console.log(doc.data.user);
                authContext.getLoggedIn(doc.data.user);
                navigate('/homepage');
                
            })
            .catch ((e) => {
                window.alert('username or password is not correct');
            })
              
        
    }


    return (
        <form onSubmit={loginFormHandler} className={styles['login-form']}>
            <div>
                <label htmlFor="username">Username</label>
                <input className={styles['input-btn']} type="text" placeholder="Enter your username" ref={usernameInputRef} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input className={styles['input-btn']} type="password" placeholder="Enter Password" ref={passwordInputRef}/>
            </div>
            <button>Login</button>
        </form>
    )
}

export default Login