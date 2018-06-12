import React, { Component } from 'react';

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>
}

export default Button;
