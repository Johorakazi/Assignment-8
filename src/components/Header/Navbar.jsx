import React from 'react';
import { Link } from 'react-router'; 

const links = (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/apps">Apps</Link></li>
    <li><Link to="/MyInstallation">Installation</Link></li>
    
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <div>
  <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
    <img
      src="/assets/logo.png"
      alt="Hero IO Logo"
      className="w-8 h-8"
    />
    HERO-IO
  </Link>
</div>

      
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Johorakazi" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2 bg-blue-600 hover:-bg-linear-60 text-white border-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="git-hub" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 
     0 5.303 3.438 9.8 8.205 11.385
     .6.113.82-.258.82-.577 
     0-.285-.01-1.04-.015-2.04
     -3.338.724-4.042-1.613-4.042-1.613
     -.546-1.387-1.333-1.756-1.333-1.756
     -1.089-.745.084-.729.084-.729
     1.205.084 1.84 1.237 1.84 1.237
     1.072 1.834 2.809 1.304 3.495.997
     .108-.775.419-1.304.762-1.604
     -2.665-.304-5.466-1.332-5.466-5.931
     0-1.311.469-2.381 1.236-3.221
     -.124-.303-.535-1.523.117-3.176
     0 0 1.008-.322 3.301 1.23
     a11.52 11.52 0 013.003-.404
     11.61 11.61 0 013.003.404
     c2.293-1.553 3.299-1.23 3.299-1.23
     .653 1.653.242 2.873.118 3.176
     .77.84 1.235 1.91 1.235 3.221
     0 4.61-2.804 5.625-5.475 5.921
     .43.371.823 1.104.823 2.226
     0 1.606-.014 2.898-.014 3.293
     0 .322.218.694.825.576
     C20.565 22.092 24 17.592 24 12.297
     c0-6.627-5.373-12-12-12z" />
          </svg>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
