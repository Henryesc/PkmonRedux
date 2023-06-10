import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../mocks/navs.json';

const Header = () => {

  const navs = data.map(nav => <NavLink to={nav.href}>{nav.name}</NavLink>);

  return (
    <header>
       <div className="y-navs y-wrap"> <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ONt0PQiNZw1NVA2uLWGUpuY7XDm17C6nU3y_GI8&s"/>{navs}</div>
    </header>
  );
};

export default Header;
