import React from 'react';
import Navbar from './components/base/navbar';

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: 'red', height: '600px' }}>App</div>
    </div>
  );
}

export default App;
