import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
    <>
    <Routes>
        <Route path ="/" element={<Menubar />}>
        </Route>
    </Routes>
    </>
    );
};

export default App;
