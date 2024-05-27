import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MusicianDetailPage } from "./pages/MusicianDetailPage";
import { BookingPage } from "./pages/BookingPage";
import "./App.css";

export function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/musician/:id" element={<MusicianDetailPage />} />
          <Route path="/bookings" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
