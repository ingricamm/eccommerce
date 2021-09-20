import React from "react";
import { Link } from 'react-router-dom';
import "../fontello/css/fontello.css";
import { Badge } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';
import { TYPES } from './actions/ShoppingCartAction';
import { useHistory } from 'react-router';
import logo from './imagenes/logo/Logo.png';
/*importar los iconos de material ui */
import'./css/NavBar.css';

export default function NavBar() {
  
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    /*Si el suario cierra seccion se eliminan los elementos cargados en el carrito de compas  */
    const handleAuth = () => {
     if (user) {
       auth.signOut();
       dispatch({
         type: TYPES.EMPTY_BASKET,
        basket: [],
       
      });
      /*Es necesario poner null en el usuario para que aparezca el saludo de bienvenida general  */
      dispatch({
        type: TYPES.SET_USER,
        user: null,
      });
      history.push("/")
    }
  }
  
  return (
    <>
      <nav className='navbar' >
          < div className='menu'>
            <i className='icon-menu'/>
            <div className='home'>
                <Link to='/'>
                <img src={logo} className='image' width='70px' />
              </Link>
            </div>
           </div>
          <ul className='navBar-items'>
            <li className='item-mensaje'>
                <div>
                    <p className='mensaje'>Hellow {user? user.email: "guest"}</p>
                    {/* cambia el mensaje de bienvenida cuando el usuario inicia sesion */}
                </div>
            </li>
            <li className='item-search'>
                <div>
                  <input/>
                  <button className='buttonSearch'> 
                     <i className='icon-search' /> 
                  </button>
                </div>
            </li >
            <li className='item-login'>
                <Link to ='/signin'>
                    <a href='/' className='button-login'  style={{color:'white', textDecoration:' none'}} onClick={handleAuth}>
                      {user?'sign out ':'login'}</a>
                    {/* una vez el usuario inicia seccion se cambia el singin por sign out */}
                </Link>
            </li>
            <li className='item-cart'>
                <Link to='/checkout-page'>
                   {/* uso Bagbe de @material para crear el numero que se muestra en el carrito a medida en que agrego productos */}
                  <Badge badgeContent={basket?.length} color='secondary'>
                     <i className='icon-basket' />
                  </Badge>
                </Link>
            </li>
          </ul>
      </nav>
    </>
  );
}
