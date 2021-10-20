import './App.css';
import NavBar from './components/NavBar';
import HomeProducts from './components/Screens/HomeProductsScreen';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import SignInScreen from './components/Screens/SignInScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import CartScreen from './components/Screens/CartScreen';
import ProductScreen from './components/Screens/ProductScreen';
import ProductsScreen from './components/Screens/ProductsScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import ConfigurationScreen from './components/Screens/ConfigurationScreen'
import OrderScreen from './components/Screens/OrderScreen';
import OrdersScreen from './components/Screens/OrdersScreen';

const openMenu = () => {
    document.querySelector('.aside-fondo').classList.add('open');
    document.querySelector('.sidebar').classList.add('open');

  };
const closeMenu = () => {
    document.querySelector('.aside-fondo').classList.remove('open');
    document.querySelector('.sidebar').classList.remove('open');
     
  
  };  
function App() {
  
  

  

  return (
    <BrowserRouter>
      <div>
        <body className='App grid-container' >
          <header className='App-header'>
            <NavBar />
          </header>
          <div className='aside-fondo'onClick={closeMenu} ></div>
          <main className='App-main' >
            <div className='content'>
              <Switch>
                <Route path='/order/:id' component={OrderScreen} />
                <Route path='/orders' component={OrdersScreen} />
                <Route path='/profile' component={ProfileScreen} />
                <Route path='/configuration' component={ConfigurationScreen} />
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
          <footer className='footer'>All right reserved.</footer>
        </body>
      </div>
    </BrowserRouter>
  );
}

export{
  App,
  openMenu,
  closeMenu
} ;
