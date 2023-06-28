import React from 'react';
import Add from "../images/gallery.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Thath Chat</span><br />
            <span className="title">Register</span><br />
            <form>
                <input type="text" placeholder='Display name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:"none"}} type="file" id="file"/>

                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  );
};

export default Register