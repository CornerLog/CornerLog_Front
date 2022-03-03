import React from 'react';
import styles from '../css/ActivityPage.module.css'

const StudyCardTitle = ({ data }) => {

  return (
    <div className={styles.TitleBody}>
      <p>
        <a href={data.postUrl} className={styles.TitleLink} target="_blank">
          {data.title}
        </a>
      </p>
      <p>{data.date.substr(0, 10)}</p>
    </div>
  )
}
export default StudyCardTitle;