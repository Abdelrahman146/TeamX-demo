

import React from "react";
import Link from "gatsby-link";
import '../styles/layouts/header.scss';
import '../styles/layouts/footer.scss';
//import '../styles/_avalanche.scss';

import logo from '../media/logo.png';

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <div>
  <div className="header-container">
    <header className="header">
      <div className="grid grid--middle">
        <div className="1/3 grid__cell">
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}><img src={logo} alt="teamX logo"/></h3>
      </Link>
        </div>
        <div className="2/3 grid__cell">
        <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="#services">Services</ListLink>
        <ListLink to="#about">About</ListLink>
        <ListLink to="#about">Contact</ListLink>
      </ul>
        </div>
      </div>
      
    </header>
    </div>
  {children()}
  </div>
);
