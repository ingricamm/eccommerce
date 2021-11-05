import React, { useState, useEffect } from "react";
import { deleteCuenta, signout, updateUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ConfigurationScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(signout());
    props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({ userId: userInfo._id, email, name, userName, password })
    );
  };

  const handleDelete = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCuenta(userInfo));
      props.history.push("/");
    }
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
    <div className="configuration">
      <ul className="configuration-info">
        <li>
          <div className="form-header">
            <button className="button secondary" onClick={() => openModal({})}>
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
                    <label htmlFor="name">User Name</label>
                    <input
                      value={name}
                      type="userName"
                      name="userName"
                      id="userName"
                      onChange={(e) => setUserName(e.target.value)}
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
                  <li></li>
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
        </li>
        <li >
          <button
            type="button"
            onClick={handleDelete}
            className="button secondary full-width"
          >
            eliminar cuenta
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleLogout}
            className="button primary full-width"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ConfigurationScreen;
