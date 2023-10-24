import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  // Child will have a prop called onChangeColor that is a function
  // console.log(onChangeColor)
  return (
  <div 
  onClick={onChangeColor}
  className="child" 
  style={{ backgroundColor: "#FFF" }} />
  )
}

export default Child;
