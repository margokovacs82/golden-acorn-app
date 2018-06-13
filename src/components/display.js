import React, { Component } from 'react';

const Display = ({ count, img }) => {
  let acStr = '';
  for (let i = 0; i < count; i++ ) {
    acStr += '🌰';
  }
  return (
    <div> 
    { count } 
    { acStr }  
    { img }
    </div>
  )
}

export default Display;
