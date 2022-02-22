import React from "react";
import guestbookst from "../css/GuestBook.module.css";

const GuestView = () => {
  return (
    <div>
      <div className={guestbookst.card}>
        <div className={guestbookst.cardtitle}>작성자 - 강태영</div>
        <div className={guestbookst.cardcontent}>
          Oh 내가 웃고 있고 있나요, 모두 거짓이겠죠 날 보는 이들의 눈빛 속에는
          슬픔이 젖어 있는데 내 이름은 광대 내 직업은 수많은 관객 그 앞에 웃음을
          파는 일 슬퍼도 웃으며 내 모습을 감추는게 철칙 Oh 이런 내 처질
          손가락질하며 날 모욕해도 음악이 꺼지고 막이 내리고 밤이 오면 별빛에
        </div>
      </div>
    </div>
  );
};

export default GuestView;
