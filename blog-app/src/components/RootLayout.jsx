import React from "react";
import { Link, Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <div className="app-container">
      <nav
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          display: "flex",
          gap: "15px",
          backgroundColor: "#fff",
        }}
      >
        <Link
          to="/"
          className="nav-link"
          activeProps={{ style: { fontWeight: "bold" } }}
        >
          Home
        </Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};
