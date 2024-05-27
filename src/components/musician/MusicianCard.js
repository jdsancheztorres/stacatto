// src/components/Musician/MusicianCard.js
import React from 'react';
import '../../styles/MusicianCard.css';

export function MusicianCard({ musician }){
  return (
    <div className="musician-card">
      <img src={`https://scontent.fbog3-3.fna.fbcdn.net/v/t1.6435-9/153084152_249076670054891_3836958161561471549_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ww64-kQ451cQ7kNvgEZarBm&_nc_ht=scontent.fbog3-3.fna&oh=00_AYDx3QmcMaLMU6rhxugVAIuJLFxFTP_Hpa6mb3Stao8B_w&oe=667B24B5`} alt={musician.name} />
      <h2>{musician.name}</h2>
      <p>{musician.genre}</p>
      <a href={`/musician/${musician.id}`}>Ver Perfil</a>
    </div>
  );
};
