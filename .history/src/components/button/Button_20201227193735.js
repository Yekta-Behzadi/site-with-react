import React from "react";
import Button from "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--perimary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize)
   ? buttonSize 
   : SIZES[0];

   return(
     <Link></Link>
   )
};
