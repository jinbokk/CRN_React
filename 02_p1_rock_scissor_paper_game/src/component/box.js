import React from "react";

const Box = (props) => {
  return (
    <div className="boxArea">
      <h1>{props.picked}</h1>
      <img src={props.item && props.item.img} alt="" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
