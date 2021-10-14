import './App.css';
import NavBar from './components/NavBar';
import HomeProducts from './components/Screens/HomeProductsScreen';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import SignInScreen from './components/Screens/SignInScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import CartScreen from './components/Screens/CartScreen';
import ProductScreen from './components/Screens/ProductScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './components/Screens/ProductsScreen';



function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div>
        <body className='App grid-container'>
           <header className='App-header'>
             <NavBar />
          </header>
           <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
         <main className='App-main'>
          <div className='content'>
            {/* <Route path='/orders' component={OrdersScreen} />
            <Route path='/profile' component={ProfileScreen} /> */}
            {/* <Route path='/order/:id' component={OrderScreen} /> */}
        <Switch>
            <Route path='/signin' component={SignInScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/products' component={ProductsScreen} />            
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/' exact={true} component={HomeProducts} />
           
        </Switch>
            
            {/* <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/category/:id' component={HomeScreen} />
            <Route path='/' exact={true} component={HomeScreen} /> */}
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
