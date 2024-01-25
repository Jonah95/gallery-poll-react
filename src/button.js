import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [name, setName] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const handleRecordData = async () => {
    try {
      // Make a POST request to the server endpoint
      await axios.post('http://localhost:3000/recordUserData', { name, clickCount });

      // Increase clickCount for the next click
      setClickCount(clickCount + 1);
    } catch (error) {
      console.error('Error recording user data:', error);
    }
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button onClick={handleRecordData}>Record Data</button>
    </div>
  );
};

export default YourComponent;
