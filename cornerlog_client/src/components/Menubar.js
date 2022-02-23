import React from 'react';
import Footer from './Footer';
import { Link, Outlet, Navlink } from 'react-router-dom';
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
                <ul className="right">
                  activity       guestbook          contact //NavLink 추후 연결 예정
                </ul>
              </div>

              <div>
                <Outlet />
              </div>
              <div>
                <Footer/> //Footer 확인용으로 임시 추가해 두었음
              </div>
            </div>
        );
    };

export default Menubar;
