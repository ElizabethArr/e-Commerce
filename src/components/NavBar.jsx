import React from 'react';

const NavBar = ({ onSearch }) => {
  return (
    <nav>
      <h1>E-commerce</h1>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default NavBar;
