import React, { useContext, useRef , useState } from 'react' 
import './login.css'
import {Link} from 'react-router-dom'
import { Context } from '../../../context/Context'
import axios from "axios"




export default function Login(){
    const userRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(false);
    const { dispatch , isFetching} = useContext(Context)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:4000/api/auth/login", {
              username: userRef.current.value,
              password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS" , playload:res.data });
            res.data && window.location.replace("/");
          } catch (err) {
              dispatch({ type: "LOGIN_FAILURE" });
              setError(true);
          }
    }
    
    return(
        <div className='login' >
            <span className='loginTitle'>Login</span>
          <form className='loginForm' onSubmit={handleSubmit}>
              <label>Username</label>
              <input type='text' 
              className='loginInput'
               placeholder='Enter your Username'
               ref={userRef}
               />
              <label>Password</label>
              <input type='password'
               className='loginInput'
                placeholder='Enter your password'
                ref={passwordRef}
                />
              <button className='loginButton' type='submit' disabled={isFetching}>Login </button>
          </form>
          <button className='loginRegisterButton'>
            <Link className="link" to='/register'>Register</Link> 
               </button>
               {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    )
}