import './App.css';
import NavBar from './components/NavBar';
import CheckoutPage from './components/CheckoutPage';
import Products from './components/Products';
import Checkout from './components/checkoutForm/CheckOut'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/Register';
import DescripcionProducto from './components/producto/DescripcionProducto';



function App() {
  
  return (
    <Router>
      <div className='App'>
        <body>
          <header className='App-header'>
             <NavBar />
          </header>
          <section className='App-section'>
            <Switch>
              <Route path='/signin'>
                <SignIn />
              </Route>
              <Route path='/signup'>
                <SignUp />
              </Route>
              <Route path='/checkout-page'>
                <CheckoutPage />
              </Route>
               <Route path='/CheckOut'>
                <Checkout />
              </Route>
              <Route path='/descrip'>
                <DescripcionProducto />
              </Route>
              <Route>
                {/* <SetQuantity/> */}
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
