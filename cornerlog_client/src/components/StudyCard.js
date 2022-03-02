import React from 'react';
import styled from '../css/ActivityPage.module.css';

const StudyCard = ({data}) => {
  return(
    <div className={styled.CardBlock}>
      <p className={styled.HeadingText}>{data.title}</p>
      <p className={styled.Content}>{data.content}
      리덕스 라이브러리 사용 시 이점
상태 업데이트에 관한 로직을 따로 분리해 모듈화
여러 컴포넌트에서 동일한 상태 공유
업데이트가 필요한 컴포넌트만 리렌더링되도록 최적화
여러 컴포넌트에서 동일한 상태 공유
업데이트가 필요한 컴포넌트만 리렌더링되도록 최적화</p>
    </div>
  )
}
export default StudyCard;