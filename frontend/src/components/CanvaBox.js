import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { closeMenu } from '../App';
import logo from './imagenes/logo/Logo.png';
import './css/NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';

export default function CanvaBox(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch;

  const handleLogout = () => {
    dispatch(signout());
    props.history.push('/signin');
  };

  return (
    <>
      <div className='canva-off'>
        <div className='header'>
          <Link to='/'>
            <img src={logo} alt='home' className='home' width='70px' />
          </Link>
          <button className='canva-off-close-button' onClick={closeMenu}>
            <i className='fa fa-times'></i>
          </button>
        </div> 
        <h3>Shopping Categories</h3>

        <div className='body'>
        <div className='links'>
          {userInfo ? (
            <div className='dropdown'>
              <Link to='#'>
                <i className='fa fa-user'> </i>
                {userInfo.name}
                <i className='fa fa-caret-down'></i>
              </Link>
              <ul className='dropdown-content ' onClick={closeMenu}>
                <li>
                  <Link to='/configuration'>configuración</Link>
                </li>
                <li>
                  <Link to='/profile'> profile</Link>
                </li>
                <li>
                  <a href='/' onClick={handleLogout}>
                    signout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to='/signin' className='link-signIn' onClick={closeMenu}>
              {userInfo ? 'sign out ' : 'login'}
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className='dropdown'>
              <a>
                Admin
                 <i className='fa fa-caret-down'></i>
              </a>
              <ul className='dropdown-content' onClick={closeMenu}>
                <li>
                  <Link to='/orders'>Orders</Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/userlist'>Users list</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
       
        <ul className='categories'>
          <li>
            <Link to='/category/Pants'>Pants</Link>
          </li>

          <li>
            <Link to='/category/Shirts'>Shirts</Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
