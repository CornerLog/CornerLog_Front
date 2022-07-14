import React from "react";
import guestbookst from "../css/GuestBook.module.css";

const GuestView = (props) => {
  return (
    <div>
      <div className={guestbookst.card}>
        <div className={guestbookst.cardtitle}>작성자 : {props.name}</div>
        <div className={guestbookst.cardcontent}>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default GuestView;
