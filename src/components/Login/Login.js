import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle, user} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/' ;

    // const handleGoogleLogin =()=>{
    //     signInUsingGoogle()
    //     .then(result=>{
    //         history.push(redirect_uri)
    //     })
    // }

    const handleGoogleLogIn =()=>{
      signInUsingGoogle()
      .then(result=>{
        history.push(redirect_uri)
      })
    }
    return (
        <div className='login-form'>
            <div>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder='your email' /><br />
                    <input type="password" name="" id="" placeholder='password' /><br />
                    <input type="submit" value="Submit" /><br />
                    <p>new to ema jhon <Link
                     to='/resister'>create</Link></p>
                    <p>------------or----------</p>
                </form>
                <button className='btn-regular' onClick={handleGoogleLogIn}>Google SignIn</button>

            </div>
        </div>
    );
};

export default Login;