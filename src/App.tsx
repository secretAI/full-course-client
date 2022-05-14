import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import MainPage from './components/pages/Main';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
    </div>
  );
}

export default App;
