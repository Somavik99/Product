import React from "react";
import { Icon } from "semantic-ui-react";
import "./NavBar.css";
const NavBar = ({ size }) => {
  return (
    <div className="nav_cell">
      <h1 id="header" style={{ color: "black" }}>
        🛒Product's Home🛒
      </h1>
      <div>
        <span>
          <Icon name="add to cart" size="big" className="nav_icon" />
        </span>
        <span color="red">{size}</span>
      </div>
    </div>
  );
};

export default NavBar;
