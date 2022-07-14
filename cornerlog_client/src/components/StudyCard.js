import React from "react";
import styled from "../css/ActivityPage.module.css";

const StudyCard = ({ data }) => {
  const content = data.content?.substr(0, 280);
  return (
    <div className={styled.CardBlock}>
      <p className={styled.HeadingText}>
        <a href={data.postUrl} target="_blank" className={styled.TitleLink}>
          {data.title}
        </a>
      </p>
      <p className={styled.Content}>{content}</p>
    </div>
  );
};
export default StudyCard;
