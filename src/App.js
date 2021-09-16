import "./App.css";
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import Products from "./components/Products";
import Checkout from "./components/checkoutForm/CheckOut"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/Register";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();
/*Escucha si hay algun cambio de usuario o en el usuario:
inyecta el usuario */
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  });

  return (
    <Router>
      <div className="App">
        <body>
          <header className="App-header">
             <NavBar />
          </header>
          <section className='App-section'>
            <Switch>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/checkout-page">
                <CheckoutPage />
              </Route>
               <Route path="/CheckOut">
                <Checkout />
              </Route>
              <Route>
                <Products />
              </Route>

            </Switch>
          </section>
        </body>
      </div>
    </Router>
  );
}

export default App;
