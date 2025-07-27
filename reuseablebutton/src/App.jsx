import React from 'react';
import Button from './components/ButtonData';
import { FaHeart } from 'react-icons/fa';

const App = () => {
  return (

    <>
    <h1 className="section-title">Reusable Button</h1>

    <div style={{ padding: '20px' }}>
    

      <Button text="Primary" variant="primary" onClick={() => alert('Clicked')} />
      <Button text="Secondary" variant="secondary" />
      <Button text="Danger" variant="danger" />
      <Button text="Like" variant="outline" icon={<FaHeart />} />
      <Button text="Disabled" variant="success" disabled />
    </div>

    </>
  );
};

export default App;
