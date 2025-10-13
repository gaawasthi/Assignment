import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router';
import "../style/navbar.css"
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user,logout } = useContext(AuthContext)
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/products" >Products</Link>
            {
              user ? <Link to="/" onClick={logout} >Logout</Link>
              :  <Link  to="/" >Login</Link>


          }
          </li>

        </ul>
      </nav>

    </div>

  );
};

export default Navbar;
