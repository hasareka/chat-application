import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Thath Chat</span><br />
            <span className="title">Login</span><br />
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
               <button>Sign in</button>
            </form>
            <p>Don't you have an account? Login</p>
        </div>
    </div>
  );
};

export default Login