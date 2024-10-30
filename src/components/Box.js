import React from 'react';
import './Box.css'; // Create a CSS file for styling

const Box = ({ title, image, link }) => {
  return (
    <div className="box">
      {image && <img src={image} alt={title} className="box-image" />}
      <h2 className="box-title">
        <a href={link}>{title}</a>
      </h2>
    </div>
  );
};

export default Box;
