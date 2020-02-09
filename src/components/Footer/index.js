import React from "react";
import GitHubButton from "react-github-btn";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <GitHubButton
        href="https://github.com/1Fungi99/Clicky-Game"
        target="_blank"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        aria-label="Follow @ntkme on GitHub"
      >
        Follow This Repository
      </GitHubButton>
    </div>
  );
}
export default Footer;
