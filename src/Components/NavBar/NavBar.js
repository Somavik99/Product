import React from "react";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
const NavBar = ({ size }) => {
  const navigate = useNavigate();
  const GoCart = () => {
    navigate("/Cart");
  };
  return (
    <div className="nav_cell">
      <h1 id="header">🛒Shoper's Home🛒</h1>
      <div onClick={GoCart}>
        <span >
          <Icon name="add to cart" size="big" className="nav_icon" />
        </span>
        <span style={{color:"red"}}>{size}</span>
      </div>
    </div>
  );
};

export default NavBar;
