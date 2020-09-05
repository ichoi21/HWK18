import React from "react";

function Header() {
  return (
    <div className="jumbotron container text-center mt-3 mb-2 shadow">
      <h1 className="text-left">
        <span style={{ color: "blue" }}>G</span>
        <span style={{ color: "red" }}>o</span>
        <span style={{ color: "yellow" }}>o</span>
        <span style={{ color: "blue" }}>g</span>
        <span style={{ color: "green" }}>l</span>
        <span style={{ color: "red" }}>e</span>{" "}
        <span style={{ color: "grey" }}>
          <i className="fas fa-book-open"></i>
        </span>
      </h1>
      <h3>“′Classic′ - a book which people praise and don't read.”</h3>
      <h6 className="text-muted text-right font-italic">― Mark Twain</h6>
    </div>
  );
}

export default Header;
