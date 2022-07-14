import React from 'react';
import Footer from './Footer';
import { Link, Outlet, NavLink } from 'react-router-dom';
import '../css/Menubar.css';

const Menubar = () => {
        return (
            <div>
              <div className="navbar">
                <div className='left'>
                  <Link to="/">
                    <img className='nav-logo' alt="홈 아이콘" src="img/corner_logo_w.png" width="60px" height="60px"/>
                  </Link>
                </div>
                <ul className="nav-links">
                <li>
                  <NavLink
                    to="/activity"
                    className="nav-link"
                  >
                    Activity
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guestbook"
                    className="nav-link"
                  >
                    GuestBook
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="nav-link"
                  >
                    Contact
                  </NavLink>
                </li>
                </ul>
              </div>

              <div>
                <Outlet />
              </div>
              <div>
                <Footer/>
              </div>
            </div>
        );
    };

export default Menubar;
