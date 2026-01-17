import React from 'react';
 

const Button = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  icon = null, // Optional icon JSX
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${variant} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
