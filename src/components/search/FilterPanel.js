import React from "react";
import "./FilterPanel.css";

export function FilterPanel() {
  return (
    <div className="filter-panel">
      <h3>Filtrar por género</h3>
      <label htmlFor="genre">Género</label>
      <select id="genre">
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
        {/* Otros géneros */}
      </select>
    </div>
  );
}
