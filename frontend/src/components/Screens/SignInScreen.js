import React, {useEffect, useState}from 'react';
import '../css/Form.css'
import {Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SignInScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
 
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
         <li  className='checkbox'>
           <label htmlFor="password">Recuerdame</label>
         <input type='checkbox' className='checkbox'></input>
          
        </li>
        <li>
          <button type="submit" className="buttonSignIn">Signin</button>
        </li>
  
        <li>
          New to Bhola?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SignInScreen;

// export default function SignInScreem() {
//   const [email, setEmail] =useState('');
//   const [password, setPassword]= useState('');
//   const history = useHistory();

//    const ingresar =(e)=>{
//         e.preventDefault();/*no refrescar la pagina*/
//         auth.signInWithEmailAndPassword(email,password).then((auth)=>history.push('/')).cath(err=>alert(err.message));
//   }

//   return (
//     <div class="main">
//       <div>
//         <h1>Login</h1>
//       </div>
//         <form class="login-form">
//           <div className='contained'>
//            <input className='username' value={email} type="text"  onChange={e=> setEmail(e.target.value)} placeholder="username"
//            required
//             fullWidth
//             id="email"
//             label="Email Address or user"
//             name="email"
//             autoComplete="email"
//             />
//             </div>
//             <div className='contained'>
//           <input className='password' value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="password"
//             required
//             name="password"
//             label="Password"
//             id="password"
//             autoComplete="current-password"
//           />
//           </div>
//           <div className='contained-checkbox'>
//             <input className='checkbox' type='Checkbox'  value="remember"  label="Remember me"/>
//             recuerdame
//           </div>
//           <button className='submit'
//            type="submit"
//             color="primary"
//             onClick={ingresar}
//             >login</button>
//              <h5>
//               <a href="#" >
//                 Forgot password?
//               </a>
//             </h5>
//        </form>
//           <div className='container'>
//               <RouteLink to ='/signup'>
//                 {"Don't have an account? Sign Up"}
//               </RouteLink>
//           </div>
//      </div>
//   );
// }