import react from 'react';
import styles from '../css/Home.module.css';

const Home = () =>{
  return(
    <div className={styles.home}>
      <div className={styles.top}>
        <img className={styles.topImg} src="img/back_top.png"/>
        <div className={styles.topBanner}><img src="img/banner_logo.png"></img></div>
        <img className={styles.line} src="img/line.png"/>
        <div className={styles.fancySentence}>We're such a wonderful small group. We have two wonderful managers. I just want to go to sleep.<br/>
Shala, shala, shala. <br/>We're such a wonderful small group. We have two wonderful managers. <br/> I just want to go to sleep.Shala, shala, shala.</div>
        <img className={styles.bottomImg} src="img/back_bottom.png"/>
        <div className={styles.slideDiv}>이미지 슬라이드</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.goalDiv}>
          <div className={styles.goalItem}>
            <img src="" alt="이미지" />
            <p>GOAL</p>
            <p>내용</p>
          </div>
          <div className={styles.goalItem}>
            <img src="" alt="이미지" />
            <p>GOAL</p>
            <p>내용</p>
          </div>
          <div className={styles.goalItem}>
            <img src="" alt="이미지" />
            <p>GOAL</p>
            <p>내용</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Home;