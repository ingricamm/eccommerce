import React from 'react';
import{openMenu, closeMenu} from '../App'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import '../fontello/css/fontello.css';
import { Badge } from '@material-ui/core';
import logo from './imagenes/logo/Logo.png';
import './css/NavBar.css';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCaretDown,
  faShoppingCart,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getTotalItems = cartItems?.reduce((amount, { qty }) => amount + qty, 0);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <nav className='navbar'>
        <div className='menu'>
          <FontAwesomeIcon
            icon={faBars}
             onClick={openMenu }
            
          />
          <Link to='/'>
            <img src={logo} alt='home' className='home' width='70px' />
          </Link>
          
          <aside className='sidebar'>
            <div className='siderbar header'>
              <button className='sidebar-close-button' onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
            <Link to='/'>
              <img src={logo} alt='home' className='home' width='70px' />
            </Link>
            </div>
         <h3>Shopping Categories</h3>

            <ul className='categories'>
              <li>
                <Link to='/category/Pants'>Pants</Link>
              </li>

              <li>
                <Link to='/category/Shirts'>Shirts</Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className='navbar-items' onClick={closeMenu}>
          <h4 className='mensaje'>
            Hellow {userInfo ? userInfo.name : 'guest'}
          </h4>
          {/* cambia el mensaje de bienvenida cuando el usuario inicia sesion */}
          {/* {category && <h2>{category}</h2>} */}
          <Route
            render={({ history }) => <SearchBox history={history} />}
          ></Route>
          <div className='header-links'>
            {userInfo ? (
              <div className='dropdown'>
                <a>
                  <FontAwesomeIcon icon={faUser}>
                    {userInfo.name}
                  </FontAwesomeIcon>
                  <FontAwesomeIcon icon={faCaretDown} />
                </a>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/configuration'>configuración</Link>
                  </li>
                  <li>
                    <Link to='/profile'> profile</Link>
                  </li>
                  <li>
                    <Link to='/signin'>signout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to='/signin'>{userInfo ? 'sign out ' : 'login'}</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className='dropdown'>
                <a>Admin </a>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/orders'>Orders</Link>
                  </li>
                  <li>
                    <Link to='/products'>Products</Link>
                  </li>
                </ul>
              </div>
            )}
            <Link to='/cart'>
              Cart
              <Badge badgeContent={getTotalItems} color='secondary'>
                {/* <Badge badgeContent={cartItems?.length} color='secondary'> */}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='button-cart'
                  style={{ margin: '0.2rem' }}
                />
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
