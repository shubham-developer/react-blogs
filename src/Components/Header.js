import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">Home</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
