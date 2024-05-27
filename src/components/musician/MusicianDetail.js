import React from "react";
import "../../styles/MusicianDetail.css";

export function MusicianDetail({ musician }) {
  console.log("Valor MusicaDetail");
  console.log(musician);
  musician = {
    name: "Gabby Fonseca",
    genre: "Romantic",
    rating: 5,
    bio: "El mejor artista musical de los llanos orientales",
  };
  return (
    <div className="musician-detail">
      <img
        src="https://scontent.fbog3-3.fna.fbcdn.net/v/t1.6435-9/153084152_249076670054891_3836958161561471549_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ww64-kQ451cQ7kNvgEZarBm&_nc_ht=scontent.fbog3-3.fna&oh=00_AYDx3QmcMaLMU6rhxugVAIuJLFxFTP_Hpa6mb3Stao8B_w&oe=667B24B5"
        alt={musician.name}
      />
      <h2>{musician.name}</h2>
      <p>Genre: {musician.genre}</p>
      <p>Rating: {musician.rating} stars</p>
      <p>Bio: {musician.bio}</p>
    </div>
  );
}
