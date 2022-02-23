import React from "react";
import "./App.css";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import GuestBook from "./pages/GuestBook";
import ActivityPage from "./pages/ActivityPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route index element={<Home />}></Route>
          <Route path="/guestbook" element={<GuestBook />}></Route>
          <Route path="/activity" element={<ActivityPage />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
