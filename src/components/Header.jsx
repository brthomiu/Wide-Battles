import React from "react";
import wideBattlesLogo from "../assets/wideBattlesLogo.svg";
import discordLogo from "../assets/discord.svg";
import "../styles.css";

const Header = () => {
  return (
    <header>
      {/* <div className="header__top">
        <h2>One</h2>
        <h2>Two</h2>
        <h2>Three</h2>
        <h2>Four</h2>
        <h2>Five</h2>
      </div> */}
      <div className="header__logo">
        <img src={wideBattlesLogo} alt="Wide Battles Logo" />
      </div>

      <div className="header__bottom">
        <button><h3>Create a Battle</h3></button>
        <button><h3>View Previous Battles</h3></button>
        <button><h3>Login</h3><img className="header__icon" src={discordLogo}/></button>
      </div>
    </header>
  );
};

export default Header;
