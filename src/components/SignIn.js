import React, {useState}from 'react';
import './css/Login.css'
import {Link as RouteLink , useHistory} from 'react-router-dom';
import { auth } from '../Firebase';


export default function SignIn() {
  const [email, setEmail] =useState('');
  const [password, setPassword]= useState('');
  const history = useHistory();

   const ingresar =(e)=>{
        e.preventDefault();/*no refrescar la pagina*/
        auth.signInWithEmailAndPassword(email,password).then((auth)=>history.push('/')).cath(err=>alert(err.message));
  }

  return (
    <div class="main">
      <div>
        <h1>Login</h1>
      </div>
        <form class="login-form">
          <div className='contained'>
           <input className='username' value={email} type="text"  onChange={e=> setEmail(e.target.value)} placeholder="username"
           required
            fullWidth
            id="email"
            label="Email Address or user"
            name="email"
            autoComplete="email"
            />
            </div>
            <div className='contained'>
          <input className='password' value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="password"
            required
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
          />
          </div>
          <div className='contained-checkbox'>
            <input className='checkbox' type='Checkbox'  value="remember"  label="Remember me"/>
            recuerdame
          </div>
          <button className='submit'
           type="submit"
            color="primary"
            onClick={ingresar}
            >login</button>
             <h5>
              <a href="#" >
                Forgot password?
              </a>
            </h5>
       </form>
          <div className='container'>
              <RouteLink to ='/signup'>
                {"Don't have an account? Sign Up"}
              </RouteLink>
          </div>
     </div>
  );
}