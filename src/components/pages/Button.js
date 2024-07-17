import React from'react';
import  "./Button.css";


const STYLES = ["Btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"]

const COLOR = ["primary" , "blue" , "red", "green"]

export const Button = ({children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? 
    buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize)? 
    buttonSize : STYLES[0]
    const checkButtonColor = STYLES.includes(buttonColor)? 
    buttonColor : null

    return (
        <button className= {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
        onClick={onClick} type={type}>{children}</button>
    )
}