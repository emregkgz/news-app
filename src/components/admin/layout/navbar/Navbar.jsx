import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { ImUser } from "react-icons/im";
import { Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="#" style={{ textDecoration: "none" }}>
            <span className="logo">CmvTech</span>
          </Link>
        </div>
        <div className="items">
          
          <div className="item">
            <Icon as={ImUser} className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
