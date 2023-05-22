import React from "react";
import "./loader.scss";

import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="Loader__container">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </div>
  );
}

export default Loader;
