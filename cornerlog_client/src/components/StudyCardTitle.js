import React from 'react';
import styles from '../css/ActivityPage.module.css'

const StudyCardTitle = ({ data }) => {

  return (
    <div className={styles.TitleBody}>
      <p>{data.title}</p>
      <p>{data.date.substr(0, 10)}</p>
    </div>
  )
}
export default StudyCardTitle;