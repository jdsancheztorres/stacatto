// src/components/Layout/Header.js
import React from 'react';
import '../../styles/Layout.css';

export function Header(){
  return (
    <header className="header">
      <h1>Staccato - All Music Service (Músicos)</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/bookings">Reservas</a>
      </nav>
    </header>
  );
};
