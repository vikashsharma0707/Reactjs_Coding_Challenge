import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="custom-card">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default Card;
