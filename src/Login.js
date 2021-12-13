import './Login.css';

import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

function Login() {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault();
        //Some fancy firebase login stuff
    }
    const register = e =>{
        e.preventDefault();
        //Do some firebase register stuff
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img
              className='login_logo'
              src="1024px-Amazon_logo.svg.png" alt=''/>
            </Link>

            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                    onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e=>setPassword(e.target.value)} />
                        
                    

                    <button type='submit' onClick={signIn}
                     className='login_signInBotton'> Sign In 
                    </button>

                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register}
                className='login_registerButton'>Create your Amazon Account
                </button>

                </div>

            
        </div>
    )
}

export default Login
