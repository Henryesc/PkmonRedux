import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cards, Favorites, Landing, Login } from '../views';


const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
