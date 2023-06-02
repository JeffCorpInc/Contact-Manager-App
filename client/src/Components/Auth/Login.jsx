import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {email, password} = user;

  const onChange = e => setUser({

    // ... update existing array or object
    ...user , [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    
    // prevent loading
    e.preventDefault();
    console.log("User Logged In");
  }

  return (

    <div className='form-container'>

        <h1>User Login</h1>

        <form onSubmit={onSubmit}>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={email} onChange={onChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={onChange} />
            </div>

            <input type="submit" value='Login'className='btn btn-primary btn-block' />

        </form>
    </div>
  )
}

export default Login;