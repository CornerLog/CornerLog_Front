import React, {useCallback, useState} from 'react';
import Footer from './Footer';
import { Link, Outlet, NavLink } from 'react-router-dom';
import styles from '../css/Menubar.css';

const Menubar = () => {
    // 메뉴 열림,닫힘 상태
    const [menuActive, setMenuActive] = useState(false);
    const MenuStateHandle = useCallback((e) => {
      setMenuActive(!menuActive);
    });
    //페이지 이동 시, 메뉴 바 닫기
    const menuClose = useCallback((e) => {
      setMenuActive(false);
    });
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
                <div
              className={
                menuActive
                  ? "hamburger" + " " + "active"
                  : "hamburger"
              }
              
              onClick={MenuStateHandle}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
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
