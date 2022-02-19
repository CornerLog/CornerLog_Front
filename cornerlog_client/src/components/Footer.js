import React from 'react';
import '../css/Footer.css';
import { Link, Outlet, Navlink } from 'react-router-dom';

const Footer = () => {

    return (
        <>
        <div className="footer">
        <div className="footer-left">
            <p className='footer-head'>Corner </p>
            <p>덕성여자대학교 컴퓨터공학전공 소모임 코너 <br />
            많은 관심과 사랑 부탁 <br />
            지원 관련 문의는 Contact Us 참고해 주세요 <br />
            Thank You</p>
        </div>
        <div class="footer-right">
        <ul>
            <p className='footer-text'>We'll Be Glad To Help </p>
            <li><p className='footer-contact'>CONTACT US </p></li>
                <ul>
                    <li>
                    <a href="https://www.instagram.com/cornerdswu">
                        <img 
                        alt="인스타그램"
                        src="img/ig_w.png"
                        width="30px"
                        height="30px"
                        />
                    </a>
                    </li>

                    <li>
                    <a href="https://corner-ds.tistory.com">
                    <img 
                      alt="티스토리"
                      src="img/ti_w.png"
                      width="30px"
                      height="30px"
                    />
                    </a>
                    </li>

                    <li>
                    <a href="/contact">
                    <img 
                      alt="메일"
                      src="img/mail_w.png"
                      width="30px"
                      height="30px"
                    />
                    </a>
                    </li>
                </ul>
            </ul>
        </div>
        </div>
        </>
    )
};

export default Footer;