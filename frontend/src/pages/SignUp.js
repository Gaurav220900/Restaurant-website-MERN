import React,{useContext, useRef} from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';

const SignUp = () => {

    const navigate = useNavigate();
    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const authContext = useContext(AuthContext);



    const signupFormHandler = (e) => {
        e.preventDefault();

        const res = axios.post('http://localhost:4000/auth/register',{
            username: usernameInputRef.current.value,
            email: emailInputRef.current.value, 
            password: passwordInputRef.current.value,
        })
        
        authContext.getLoggedIn();
        navigate('/homepage');
        
    }
  return (
    <form onSubmit={signupFormHandler} className={styles["login-form"]}>
    <div>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="Enter your username"
        ref={usernameInputRef}
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        ref={emailInputRef}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        ref={passwordInputRef}
      />
    </div>
    <div>
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        placeholder="Enter Password Again"
        ref={confirmPasswordInputRef}
      />
    </div>
    <button>Sign Up</button>
  </form>
  )
}

export default SignUp