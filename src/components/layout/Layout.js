import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Aside } from "./Aside";
import "../../styles/Layout.css";

export function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Aside />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
