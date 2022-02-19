import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
