import React from "react";

import "./MainHeader.css";

function mainHeader(props) {
  return <header className="main-header">{props.children}</header>;
};

export default mainHeader;
