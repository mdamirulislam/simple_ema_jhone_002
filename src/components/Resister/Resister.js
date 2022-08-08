import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Resister = () => {
    const {signInUsingGoogle} = useAuth()
    return (
     <div className='login-form'> 

           <div >
           <h2>Plase Resister </h2>
            <div>
                <form onSubmit="">
                    <input type="email" placeholder='your email' /><br />
                    <input type="password" placeholder='your password' /><br />
                    <input type="password" placeholder='re-enter-password' /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already hav an account?  <Link to='./login'>Login</Link></p>
                <p>--------or---------</p>
                <button className="btn-regular" >Google SignIn</button>
            </div>
        </div>
     </div>
    );
};

export default Resister;