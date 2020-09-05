import React from "react";
import Header from "../components/Header";

function NoMatch() {
  return (
    <div>
      <Header>
        <h3>404 Page Not Found</h3>
        <h5>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h5>
      </Header>
    </div>
  );
}

export default NoMatch;
