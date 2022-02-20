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
        <div className={styles.slideBack}>
          <div className={styles.slideDiv}>
            <div className={styles.slideItem}>이미지 슬라이드</div>
            <div className={styles.slideItem}>이미지 슬라이드</div>
            <div className={styles.slideItem}>이미지 슬라이드</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.goalDiv}>
          <div className={[styles.goalItem, styles.oneGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal1.png" alt="이미지" />
            </div>
            <p>GOAL 1<br/>Swag</p>
            <p className={styles.introduce}>COOL GITHUB<br/>NEVER SLEEP</p>
          </div>
          <div className={[styles.goalItem, styles.twoGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal2.png" alt="이미지" />
            </div>
            <p>GOAL 2<br/>Relationship</p>
            <p className={styles.introduce}>Friendship with <br/>people in your major.</p>
          </div>
          <div className={[styles.goalItem, styles.threeGoal].join(' ')}>
            <div className={styles.circle}>
              <img src="img/goal3.png" alt="이미지" />
            </div>
            <p>GOAL 3<br/>Knowledge</p>
            <p className={styles.introduce}>My Knowledge and <br/> my level are getting higher.</p>
          </div>
        </div> 
      </div>
      <img className={styles.backBottom1} src="img/back_bottom1.png"/>
      <div className={styles.backImg}>
        <img className={styles.backBottom2} src="img/back_bottom2.png"/>
      </div>
    </div>
  )
}

export default Home;