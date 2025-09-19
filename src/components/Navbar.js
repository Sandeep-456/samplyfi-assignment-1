import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand fw-bold" href="#">
        Dashboard
      </a>
      <div className="d-flex align-items-center ms-auto">
        <a className="navbar-brand">Contact</a>
        <a className="navbar-brand">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
