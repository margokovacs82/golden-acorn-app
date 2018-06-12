import React, { Component } from 'react';

const Display = ({ count }) => {
  let acStr = '';
  for (let i = 0; i < count; i++ ) {
    acStr += '🌰';
  }
  return (
    <div> 
    { count } 
    { acStr }  
    </div>
  )
}

export default Display;

