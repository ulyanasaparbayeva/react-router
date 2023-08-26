import React from "react";
import {NavLink} from "react-router-dom";
import './Nav.css'
import {BiSolidChevronDown} from "react-icons/bi";
import {PiGlobeLight} from "react-icons/pi";
import { useLocation, Link } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <header className={'header'}style={{ backgroundColor: isHomePage ? 'yellow' : 'white' }}>
      <div className="container">
        <nav className="menu">
          <ul>
            <NavLink to="/" activeClassName="active-link" className={isHomePage ? 'home-page-link' : ''}>
              <li className="logo">CameraMath</li>
            </NavLink>
          </ul>
          <ul className="menu_link">
            <li className="menu__item">
              <NavLink to="/Download" activeClassName="active-link"
                      >Download</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Expert"  activeClassName="active-link" className={({isActive}) => isActive?
                "active" : "link"}>Expert Q&A</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Lessons" activeClassName="active-link"  className={({isActive}) => isActive?
                "active" : "link"}>Lessons & Calculators</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Premium"  activeClassName="active-link" className={({isActive}) =>
                isActive? "active" : "link"}>Premium</NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu_language">
            <PiGlobeLight/>
             En
              <BiSolidChevronDown/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Nav