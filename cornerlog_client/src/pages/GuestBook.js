import React from "react";
import guestbookst from "../css/GuestBook.module.css";
import GuestForm from "../components/GuestForm";
import GuestView from "../components/GuestView";

const GuestBook = () => {
  return (
    <div className={guestbookst.body}>
      <div className={guestbookst.left}>
        <GuestForm />
      </div>
      <div className={guestbookst.right1}>
        <GuestView />
        <GuestView />
        <GuestView />
        <GuestView />
      </div>
      <div className={guestbookst.right2}>
        <GuestView />
        <GuestView />
        <GuestView />
        <GuestView />
      </div>
    </div>
  );
};

export default GuestBook;
