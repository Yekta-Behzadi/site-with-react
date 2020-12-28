import React from 'react'
import Button from './button.css'
import {Link} from 'react-router-dom'


const STYLES = ['btn--perimary', 'btn--outline']
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{

  const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize= 
}
