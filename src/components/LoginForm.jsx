import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import './LoginForm.css';
import Logo from './Logo'

export default function LoginForm(props) {

    let navigate = useNavigate();

    let [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('authStatus');
    },[]);

    const inputsHandler = (e) => {
        setLoginDetails( {...loginDetails, [e.target.name]: e.target.value} )
    }

    const signInHandler = (e) => {
        e.preventDefault()
        const URL = 'https://reqres.in/api/login';
        fetch(URL, {
            method: 'POST',

            body: JSON.stringify(loginDetails),

            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        })
            .then(res => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('authStatus', true);
                navigate('/home')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='login-container'>
            <div className="login-box">
                <Logo />
                <hr className="hr-text" data-content="sign in using email" />
                <form>
                    <div className="form-input-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id='email' name='email' onChange={inputsHandler} />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id='password' name='password' onChange={inputsHandler} />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={signInHandler}>Sign in</button>
                </form>
            </div>
        </div>
  );
}