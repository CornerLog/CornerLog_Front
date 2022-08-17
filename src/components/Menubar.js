import React, {useCallback, useState} from 'react';
import Footer from './Footer';
import { Link, Outlet, NavLink } from 'react-router-dom';
import styles from '../css/Menubar.module.css';

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
              <div className={styles.navbar}>
                <div className={styles.left}>
                  <Link to="/">
                    <img className={styles.navLogo} alt="홈 아이콘" src="img/corner_logo_w.png" width="60px" height="60px"/>
                  </Link>
                </div>
                <ul className={styles.navLinks}>
                <li>
                  <NavLink
                    to="/activity"
                    className={styles.navLink}
                  >
                    Activity
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guestbook"
                    className={styles.navLink}
                  >
                    GuestBook
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={styles.navLink}
                  >
                    Contact
                  </NavLink>
                </li>
                </ul>
                <div
              className={
                menuActive
                  ? styles.hamburger + " " + styles.active
                  : styles.hamburger
              }
              
              onClick={MenuStateHandle}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
              </div>
              
              <div className={styles.HeaderBottom}>
              <ul className={menuActive ? styles.NavMenuActive : styles.NavMenu}>
              <NavLink
                to="/activity"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>Activity</li>
              </NavLink>
              <NavLink
                to="/guestbook"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>GuestBook</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>Contact</li>
              </NavLink>

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
