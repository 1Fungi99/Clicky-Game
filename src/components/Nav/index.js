import React from "react";
import "./style.css";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      <a className="navbar-brand" href="/">
        <img
          className="logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fspongebob%2Fimages%2F0%2F0e%2FOld_SpongeBob_SquarePants_logo.png%2Frevision%2Flatest%3Fcb%3D20150817094426&f=1&nofb=1"
        ></img>
      </a>
      <div className="text-center">
        <h1>Click a character to begin</h1>
      </div>
      <div className="nav navbar-nav ml-auto">
        <p className="currentScore">Score: {props.currentScore}</p>
        <div class="vl"></div>
        <p className="topScore"> Highest Score: {props.highestScore}</p>
      </div>
    </nav>
  );
};

export default Nav;
