import React,{useContext, useRef,useState} from 'react';
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
    const userTypeRef = useRef();
    const authContext = useContext(AuthContext);

    const [radioValue, setRadioValue] = useState();

     const signupFormHandler = async(e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:4000/auth/register',{
            username: usernameInputRef.current.value,
            email: emailInputRef.current.value, 
            password: passwordInputRef.current.value,
            userType: radioValue,
        })
        console.log(res.data);
        
        if(res.status === 200){
        authContext.getLoggedIn(res.data.user);
        navigate('/homepage');
        }
        else{
            
            window.alert('Username already exist');
            
        }

        
    }
    const changeToReatiler = () => {
      setRadioValue("retailer");
  }
  const changeToConsumer = () => {
     setRadioValue("consumer");
}
  
  return (
    <form onSubmit={signupFormHandler} className={styles["login-form"]}>
    <div>
      <label htmlFor="username">UserName</label>
      <input  className={styles['input-btn']}
        type="text"
        placeholder="Enter your username"
        ref={usernameInputRef}
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input
      className={styles['input-btn']}
        type="email"
        placeholder="Enter your email"
        ref={emailInputRef}
      />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
      className={styles['input-btn']}
        type="password"
        placeholder="Enter Password"
        ref={passwordInputRef}
      />
    </div>
    <div>
      <label htmlFor="password">Confirm Password</label>
      <input
      className={styles['input-btn']}
        type="password"
        placeholder="Enter Password Again"
        ref={confirmPasswordInputRef}
      />
    </div>
    <div>
      <label htmlFor='userType'>Want to register as: </label>

      <input className={styles['radio-btns']}  type = 'radio'  value='consumer' name='userType'  onClick={changeToConsumer} />consumer
      <input className= {styles["radio-btns"]} type= 'radio'  value='retailer' name='userType' onClick={changeToReatiler} />retailer
    </div>
    <br></br>
    <button>Sign Up</button>
  </form>
  )
}

export default SignUp