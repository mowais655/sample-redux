import React, { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createUser } from "../store/actions/actions";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { storedEmail } = useSelector(
    (state) => ({
      storedEmail: state.user.email,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!!storedEmail) {
      navigate("/login");
    }
  }, [storedEmail]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [errorFlag, setErrorFlag] = useState(false);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !phone || !profession) {
      setErrorFlag(true);
    } else {
      setErrorFlag(false);
      const userData = {};
      userData.name = name;
      userData.email = email;
      userData.password = password;
      userData.phone = phone;
      userData.profession = profession;
      dispatch(createUser(userData));
    }
  }

  return (
    <div className={"App"}>
      <div className={"outer"}>
        <div className={"inner"}>
          <form onSubmit={handleFormSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                autoComplete="off"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                autoComplete="off"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Choose your Profession</label>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)}
              >
                <option>Select</option>
                <option>React Developer</option>
                <option>Angular Developer</option>
                <option>Next Developer</option>
                <option>Node Developer</option>
                <option>Full Stack</option>
              </Form.Control>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered? <Link to="/login">Login here</Link>
            </p>
            {errorFlag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
