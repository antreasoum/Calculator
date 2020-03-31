import React from 'react';
import './Button.css';

export const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null: "Operator" }`} >{props.children}
    </div>
)

