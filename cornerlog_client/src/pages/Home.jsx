import react, { useState } from 'react';
import styles from '../css/Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [rtlBoolean, setrtlBoolean] = useState(false);
  const [speed, setSpeed] = useState(2000);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed,
    pauseOnHover: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: rtlBoolean,
  };

  function SampleNextArrow(props) {
    const { className } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          opacity: "0",
          height: "100%",
          width: "20%",
          right: "0",
        }}
        onMouseEnter={function (e) {
          setrtlBoolean(false);
          setSpeed(500);
          console.log("next");
        }}
        onMouseLeave={function (e) {
          setSpeed(2000);
        }}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          opacity: "0",
          height: "100%",
          width: "20%",
          left: "0",
          zIndex: "999",
        }}
        onMouseEnter={function (e) {
          setrtlBoolean(true);
          setSpeed(500);
          console.log("prev");
        }}
        onMouseLeave={function (e) {
          setrtlBoolean(false);
          setSpeed(2000);
        }}
      />
    );
  }

  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <img className={styles.topImg} src="img/back_top.png" alt="top" />
        <div className={styles.topBanner}>
          <img src="img/banner_logo.png" alt="corner" />
        </div>
        <img className={styles.line} src="img/line.png" alt="line" />
        <div className={styles.fancySentence}>
        Hello, we are the development club of Duksung Women's University majoring in computer engineering. <br/>
        Corner was created for the development of our major.<br/>
        The goal is to activate exchanges between seniors and juniors, activate additional learning outside the curriculum, and provide guidelines to other students.<br/>
        Various events are held on a yearly basis, and curriculum, learning, and project once are required.<br/>
        Please pay a lot of attention to Corner.
        </div>
        <img className={styles.bottomImg} src="img/back_bottom.png" alt="back_bottom" />

        <div className={styles.slideBack}>
          <div className={styles.slideWrap}>
            <Slider {...settings}>
              <div className={styles.slideItem}><img src="img/invisible1.png" /></div>
              <div className={styles.slideItem}><img src="img/invisible2.png" /></div>
              <div className={styles.slideItem}><img src="img/invisible1.png" /></div>
              <div className={styles.slideItem}><img src="img/invisible2.png" /></div>
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.goalDiv}>
          <div className={[styles.goalItem, styles.oneGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal1.png" alt="이미지" />
            </div>
            <p>GOAL 1<br />Swag</p>
            <p className={styles.introduce}>COOL GITHUB<br />NEVER SLEEP</p>
          </div>
          <div className={[styles.goalItem, styles.twoGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal2.png" alt="이미지" />
            </div>
            <p>GOAL 2<br />Relationship</p>
            <p className={styles.introduce}>Friendship with <br />people in your major.</p>
          </div>
          <div className={[styles.goalItem, styles.threeGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal3.png" alt="이미지" />
            </div>
            <p>GOAL 3<br />Knowledge</p>
            <p className={styles.introduce}>My Knowledge and <br /> my level are getting higher.</p>
          </div>
        </div>
      </div>
      <img className={styles.backBottom1} src="img/back_bottom1.png" />
      <div className={styles.backImg}>
        <img className={styles.backBottom2} src="img/back_bottom2.png" />
      </div>
    </div>
  )
}

export default Home;