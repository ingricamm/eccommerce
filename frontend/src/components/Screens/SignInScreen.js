import React, {useEffect, useState}from 'react';
import '../css/Form.css'
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SignInScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
 
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [props.history, redirect, userInfo]);

  function submitHandler(e) {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return <div className='form'>
    <form onSubmit={submitHandler} >
      <ul className='form-container'>
        <li>
          <h2>Identificate</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div className='error'>{error}</div>}
        </li>
        <li>
          <label for='email'>
            Email
          </label>
          <input type='email'
            name='email'
            id='email'
            placeholder='admin@example.com'
            maxlength="254"
            pattern='^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$'
            onChange={(e) => setEmail(e.target.value)}
            required>
          </input>
        </li>
        <li>
          <label htmlFor='password'>Password</label>
          <input type='password'
           id='password'
           name='password' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} required>
          </input>
        </li>
         <li  className='checkbox'>
           <label htmlFor='password'>Recuerdame</label>
         <input type='checkbox' className='checkbox'></input>
          
        </li>
        <li>
          <button type='submit' className='buttonSignIn'>Signin</button>
        </li>
  
        <li>
          New to Bhola?
        </li>
        <li>
          <Link to={redirect === '/' ? 'register' : 'register?redirect=' + redirect} className='button secondary text-center' >Create your Bhola account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SignInScreen;

