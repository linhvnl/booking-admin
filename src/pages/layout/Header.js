// import React/Hook/Router...
import React from "react";

// function Component
const Header = function (props) {
  // return
  return (
    <header className="row text-center">
      <div className="col-2 border border-light border-2 py-2">
        <h5 className="text-primary-cus fw-bold mb-0">Admin Page</h5>
      </div>
      <div className="col-10 border border-light border-2 py-2"></div>
    </header>
  );
};

export default Header;
