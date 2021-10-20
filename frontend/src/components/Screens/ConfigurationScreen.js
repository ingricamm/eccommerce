import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout, update } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ConfigurationScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;
  const openModal = (userInfo) => {
    setModalVisible(true);
    setEmail(userInfo.email);
    setName(userInfo.name);
    setPassword(userInfo.password);
  };
 
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
   
  }, [dispatch, userInfo]);

  return (
    <div className="profile">
      <div className="profile-info">
        <div className='form-header'>
           <button className="button primary" onClick={() => openModal({})}>
          Actualizar datos
        </button>
        </div>
        {modalVisible && (
          <div className="form">
            <form onSubmit={submitHandler}>
              <ul className="form-container">
                <li>
                  <h2>User Profile</h2>
                </li>
                <li>
                  {loading && <div>Loading...</div>}
                  {error && <div>{error}</div>}
                  {success && <div>Profile Saved Successfully.</div>}
                </li>
                <li>
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    type="name"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="email">Email</label>
                  <input
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="password">Password</label>
                  <input
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </li>

                <li>
                  <button type="submit" className="button primary">
                    Update
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="button secondary full-width"
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalVisible(false)}
                    className="button secondary"
                  >
                    Back
                  </button>
                </li>
              </ul>
            </form>
          </div>
        )}
      </div>
     </div>
  );
}

export default ConfigurationScreen;
