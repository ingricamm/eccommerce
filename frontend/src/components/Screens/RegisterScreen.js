import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import '../css/Form.css';

function RegisterScreen(props) {
  const [name, setName] = useState('');
 // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;


  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <h2>Crear Cuenta</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div className='error'>{error}</div>}
          </li>
          <li>
            <label htmlFor='name'>Name</label>
            <input
              type='name'
              name='name'
              id='name'
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </li>
          {/* <li>
            <label htmlFor='userName'>User name</label>
            <input
              type='userName'
              name='userName'
              id='userName'
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
          </li> */}
          <li>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              maxlength='254'
              placeholder='admin@example.com'
              pattern='^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$'
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              minlength='8'
              maxlength='16'
              name='password'
              pattern='(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$'
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </li>
          <li>
            <label htmlFor='rePassword'>Confirm Password</label>
            <input
              type='password'
              id='rePassword'
              name='rePassword'
              onChange={(e) => setRePassword(e.target.value)}
              required
            ></input>
          </li>
          <li>
            <button type='submit' id='register' className='button primary' >
              Register
            </button>
          </li>
          <li>
            Already have an account?
            <Link
              to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}
              className='button secondary text-center'
            >
              Sign In in Bhola
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default RegisterScreen;
