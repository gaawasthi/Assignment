import React, { useContext, useState } from 'react';
import "../style/loginForm.css";
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [userdata, setUserData] = useState({
    username: "",
    password: "",
  });

  const user = {
    username: "admin",
    password: "1234",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", userdata);

 if (userdata.username === user.username && userdata.password === user.password) {
  login(user);
  navigate("/products");
}
 else {
      alert("Invalid username or password");

    }
  };

  return (
    <div className="login-div">
      <form onSubmit={onSubmit} className="login-form">
        <h2>Login User</h2>

        <label>Username</label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          value={userdata.username}
          placeholder="Enter your username"
        />

        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={userdata.password}
          placeholder="Enter password here"
        />

        <button type="submit">Login</button>
           <h4 className='register-link' onClick={()=>{navigate("/register")}}  >New user click here to register</h4>
      </form>
    </div>
  );
};

export default Login;
