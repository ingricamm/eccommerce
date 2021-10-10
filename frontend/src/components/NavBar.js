import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../fontello/css/fontello.css";
import { Badge } from "@material-ui/core";
import { TYPES } from "./constants/cartConstants";
import { useHistory } from "react-router";
import logo from "./imagenes/logo/Logo.png";
/*importar los iconos de material ui */
import "./css/NavBar.css";
import { useStateValue } from "../Store";
import { useSelector } from "react-redux";
import { listProducts } from "./actions/productActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
  const [
    { basket, user, cart },
    searchKeyword,
    setSearchKeyword,
    sortOrder,
    setSortOrder,
    dispatch,
  ] = useState("");
  //const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  

  //  useEffect(() => {
  //   dispatch(listProducts(category));

  //   return () => {
  //     //
  //   };
  // }, [category]);

  const history = useHistory();
  /*Escucha si hay algun cambio de usuario o en el usuario:
        inyecta el usuario */
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log(authUser);
  //     if (authUser) {
  //       dispatch({
  //         type: TYPES.SET_USER,
  //         user: authUser,
  //       });
  //     }
  //   });
  // });

  /*Si el suario cierra seccion se eliminan los elementos cargados en el carrito de compas  */
  // const handleAuth = () => {
  //   if (user) {
  //     auth.signOut();
  //     dispatch({
  //       type: TYPES.EMPTY_BASKET,
  //       basket: [],
  //     });
  //     /*Es necesario poner null en el usuario para que aparezca el saludo de bienvenida general  */
  //     dispatch({
  //       type: TYPES.SET_USER,
  //       user: null,
  //     });
  //     history.push("/");
  //   }
  // };

   const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts( searchKeyword, sortOrder));
    };

    const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts( searchKeyword, sortOrder));
  };
const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  return (
    <>
      <nav className="navbar">
        <div className='menu'>
         <FontAwesomeIcon icon={faBars} onClick={openMenu} style={{ color: 'white' }}/>
          <Link to="/">
            <img src={logo} className="home" width="70px" />
          </Link>
        </div>
        <div className="navbar-items">
              <h4 className="mensaje">Hellow {user ? user.email : "guest"}</h4>
              {/* cambia el mensaje de bienvenida cuando el usuario inicia sesion */}
            {/* {category && <h2>{category}</h2>} */}
            <form className="item-search filter">
              {/* <form onSubmit={submitHandler}> */}
              <input
                name="searchKeyword"
                type="search"
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button type="submit" className="buttonSearch">
                <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }}/>
              </button>
            </form>
            <div className="header-links">
                  {userInfo ? (
                    <button> <Link to="/profile">{userInfo.name}</Link></button>
                  ) : (
                    <Link to="/signin">{user ? "sign out " : "login"}</Link>
                    
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                      <a href="#">Admin</a>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/orders">Orders</Link>
                          <Link to="/products">Products</Link>
                        </li>
                      </ul>
                    </div>
            )}
                  <Badge badgeContent={cart?.length} color="secondary">
                    <a href="cart.html">Cart<FontAwesomeIcon icon={faShoppingCart} className='button-cart' style={{ color: 'white'}}/>
                    </a></Badge>
          </div>  
        </div>
      </nav>
    </>
  );
}
