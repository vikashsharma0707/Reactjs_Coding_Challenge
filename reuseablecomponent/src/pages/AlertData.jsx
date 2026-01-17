import React, { useState } from 'react';
import Alert from '../components/Alert';
import Button from '../components/Button';

const AlertData = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);

    // Auto-hide after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      
      <Button text="Show Success Alert" onClick={handleClick} />

      {showAlert && (
        <Alert type="success" message="Operation completed successfully!" />
      )}
    </div>
  );
};

export default AlertData;
