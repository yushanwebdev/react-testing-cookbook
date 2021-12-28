import React from "react";

const LikeCounter = ({ count, isActive }) => (
  <a className={isActive ? "LikeCounter--active" : "LikeCounter"}>
    <div>
      <span>{count} likes</span>
    </div>
  </a>
);

export default LikeCounter;
