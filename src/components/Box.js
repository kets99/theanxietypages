import React from 'react';
import './Box.css'; // Create a CSS file for styling

const Box = ({ title, image }) => {
  return (
    <div className="box">
	      <h2 className="box-title">{title}</h2>
      <img src={image} alt={title} className="box-image" />
    </div>
  );
};

export default Box;
