import React from "react";

function Home() {
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="display-3 fw-bold text-center mb-4">
          Book Management System
        </h1>

        <a href="/view-all" className="btn btn-primary btn-sm px-4">
          Continue
        </a>
      </div>
    </div>
  );
}

export default Home;