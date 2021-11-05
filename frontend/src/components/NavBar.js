import React, { useEffect } from "react";
import { openMenu, closeMenu } from "../App";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import "../fontello/css/fontello.css";
import { Badge } from "@material-ui/core";
import logo from "./imagenes/logo/Logo.png";
import "./css/NavBar.css";
import SearchBox from "./SearchBox";
import CanvaBox from "./CanvaBox";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./actions/userActions";

function NavBar(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getTotalItems = cartItems?.reduce((amount, { qty }) => amount + qty, 0);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch;

  const handleLogout = () => {
    dispatch(signout());
    props.history.push("/signin");
  };

  return (
    <>
      <nav className="navBar ">
        <div className="menu">
          <div>
            <button onClick={openMenu}>
              <i className="fa fa-bars"></i>
            </button>
            {/* para dispositivos <570px se mostrara este carrito de compras */}
            <Link to="/cart" className="ocultar">
              <Badge badgeContent={getTotalItems} color="secondary">
                <i className="fa fa-shopping-cart button-cart"></i>
              </Badge>
            </Link>
          </div>
          <div className="ocultar">
            <Route
              render={({ history }) => <SearchBox history={history} />}
            ></Route>
          </div>          
          <Link to="/">
            <img src={logo} alt="home" className="home" width="70px" />
          </Link>
          {/* canvaOff o menu escondido */}
          <CanvaBox />
          {/*buscador para equipos pequeños*/}

        </div>

        <div className="navbar-items" onClick={closeMenu}>
          <h4 className="mensaje">
            Hellow {userInfo ? userInfo.name : "guest"}
          </h4>
          {/* cambia el mensaje de bienvenida cuando el usuario inicia sesion */}
          {/* {category && <h2>{category}</h2>} */}
          <Route
            render={({ history }) => <SearchBox history={history} />}
          ></Route>
          <div className="header-links">
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  <i className="fa fa-user"> </i>
                  {userInfo.name}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/configuration">configuración</Link>
                  </li>
                  <li>
                    <Link to="/profile"> profile</Link>
                  </li>
                  <li>
                    <a href="/" onClick={handleLogout}>
                      signout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin" className="link-signIn">
                {userInfo ? "sign out " : "login"}
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a>
                  Admin <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users list</Link>
                  </li>
                </ul>
              </div>
            )}
            <Link to="/cart">
              cart
              <Badge badgeContent={getTotalItems} color="secondary">
                <i className="fa fa-shopping-cart button-cart"></i>
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
