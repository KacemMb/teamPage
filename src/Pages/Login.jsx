import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handelChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = () => {
        console.log(data)
    }
  return (
    <div className='Login'>
      <div className='Container'>
        <div className='upperBody'>
            <input type="email" placeholder='Email' name='email' onChange={handelChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handelChange}/>
            <p ><Link className='forget'>Forget Password</Link></p>
            
        </div>
        
        <button className='LoginBtn' onClick={handelSubmit}><Link to={'dashboard'}>Login</Link></button>
      </div>
    </div>
  )
}

export default Login
