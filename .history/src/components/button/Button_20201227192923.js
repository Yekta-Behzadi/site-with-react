import React from 'react'
import Button from './button.css'
import {Link} from 'react-router-dom'


const STYLES = ['btn--perimary', ]


export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>{

  const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
}
