
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <section className="navbar-section">
    <div className="nav-title">
      <Link   to="/" >  <h2>SUBY</h2></Link>
    </div>
    <div className="nav-search">
        <input type="text" placeholder='search...' />
    </div>
    <div className="nav-auth">
        Login /SignUp
    </div>
   </section>
   </>
  );
}

export default Navbar;
