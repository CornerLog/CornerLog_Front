import React from 'react';
import { Link, Outlet, Navlink } from 'react-router-dom';

const Menubar = () => {
        return (
            <div>
              <div>
                <div>
                  <Link to="/">
                    <img
                      alt="홈 아이콘"
                      src="img/corner_logo.png"
                      width="60px"
                      height="60px"
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                  activity
                  </li>
                  <li>
                  guestbook
                  </li>
                  <li>                  contact                  </li>
                  </ul>
              </div>

              <div>
                <Outlet />
              </div>
            </div>
        );
    };

export default Menubar;
