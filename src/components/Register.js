//formulario de registro en la aplicacion
import React, { useState } from 'react';
import './css/Register.css'
import {Link as RouteLink , useHistory} from 'react-router-dom';
import { auth } from '../Firebase';



export default function SignUp() {
 
  const [email, setEmail] =useState('');
  const [user, setUmail] =useState('');
  const [password, setPassword]= useState('');
  const history = useHistory();

  const crear =(e)=>{
        e.preventDefault();
         auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
           console.log(auth);
           if(auth){
              history.push('/');
           }
          
          }).cath(err=>alert(err.message));
  }

  return (
    <div className="main">
      <div className='paper'>
        <h1 >
          Sign up
        </h1>
        <form className='register-form' noValidate>
         <div className='contained-reg'>
           <div className='nombre'>
              <input
              placeholder="Nombre(s)"
                autoComplete="fname"
                name="firstName"
                required
                id="firstName"
                label="First Name"
              />
           
              <input
              placeholder="Primer apellido"
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            
              <input
              placeholder="Segundo apellido"
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </div>
            </div>
            <div className='contained-email'>
              <input className='username' value={email} type="text"  onChange={e=> setEmail(e.target.value)} 
               placeholder="correo electronico"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                />
                 <input className='username' value={user} type="text"  onChange={e=> setUmail(e.target.value)} 
               placeholder="nombre de usuario"
                required
                fullWidth
                id="user"
                label=" user"
                name="user"
                autoComplete="email"
                />
            </div>
            <div className='contained-password'>
              <input className='password' value={password} onChange={e=> setPassword(e.target.value)} type="password" 
                placeholder="contraseña"
                required
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
              />
              <input className='password' value={password} onChange={e=> setPassword(e.target.value)} type="password" 
                placeholder="confirme contraseña"
                required
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
              />
          </div>
            <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
            onClick={crear}

          >
            Sign Up
          </button>
          <div className='container-reg'>
            <RouteLink to= '/signin'>
                Already have an account? Sign in
            </RouteLink>
          </div>
           
        </form>
      </div>
    </div>
  );
}