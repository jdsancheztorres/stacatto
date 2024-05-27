import React from "react";
import "../../styles/Layout.css";

export function Aside() {
  return (
    <aside className="aside">
      <h2>Opciones de Reserva de Músicos</h2>
      <ul>
        <li>
          <h3>Bandas</h3>
          <ul>
            <li>
              <a href="#">Buscar Bandas</a>
            </li>
            <li>
              <a href="#">Bandas de Rock</a>
            </li>
            <li>
              <a href="#">Bandas de Jazz</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Artistas Solistas</h3>
          <ul>
            <li>
              <a href="#">Buscar Solistas</a>
            </li>
            <li>
              <a href="#">Guitarristas Solistas</a>
            </li>
            <li>
              <a href="#">Pianistas Solistas</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>DJs</h3>
          <ul>
            <li>
              <a href="#">Buscar DJs</a>
            </li>
            <li>
              <a href="#">DJs de Fiesta</a>
            </li>
            <li>
              <a href="#">DJs de Bodas</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Estilos Musicales</h3>
          <ul>
            <li>
              <a href="#">Música Pop</a>
            </li>
            <li>
              <a href="#">Música Clásica</a>
            </li>
            <li>
              <a href="#">Música Electrónica</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
