import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Alert from '../components/Alert';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Home Page</h1>
      
      <Card title="React" description="A JavaScript library for building user interfaces." />
      
      
      <Button text="Click Me" onClick={() => alert("Button Clicked")} />
        <Alert type="success" message="Task saved successfully!" />
      <Alert type="error" message="Something went wrong!" />
      <Alert type="warning" message="This is a warning alert." />
      <Alert type="info" message="This is just for your info." />

    </div>
  );
};

export default Home;
