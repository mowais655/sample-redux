import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { storeLogin } from "../store/actions/actions";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, email, password } = useSelector(
    (state) => ({
      isAuthenticated: state.user.isAuthenticated,
      email: state.user.email,
      password: state.user.password,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/blog");
    }
  }, [isAuthenticated]);

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== password || emaillog !== email) {
      setFlag(true);
    } else {
      setFlag(false);
      dispatch(storeLogin());
    }
  };

  return (
    <div className={"App"}>
      <div className={"outer"}>
        <div className={"inner"}>
          <form onSubmit={handleLogin}>
            <h3>LogIn</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>

            {flag && (
              <Alert color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
            <p className="forgot-password text-right">
              Dont't have an account? <Link to="/?new=true">Signup here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
