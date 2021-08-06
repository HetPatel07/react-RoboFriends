import React from "react";
import "./scroll.css"

const Scroll = (props) => {
  // const scrollStyle = {
  //   overflowY : 'scroll',
  //   height: "800px",
  //   scrollbarWidth: "none",
  // }
  return (
    <div className="scroll">
      {props.children}
    </div>
  );
};

export default Scroll;
