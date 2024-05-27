// src/components/Musician/MusicianList.js
import React, { useState, useEffect } from 'react';
import {MusicianCard} from './MusicianCard';
import '../../styles/MusicianList.css';

export function MusicianList(){
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    // Simular llamada a una API
    const fetchedMusicians = [
      { id: 1, name: 'Gabby Fonseca', genre: 'Romantic' },
      { id: 2, name: 'Camilo Torres', genre: 'Jazz' },
      // Otros músicos
    ];
    setMusicians(fetchedMusicians);
  }, []);

  return (
    <div className="musician-list">
      {musicians.map(musician => (
        <MusicianCard key={musician.id} musician={musician} />
      ))}
    </div>
  );
}