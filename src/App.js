// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home'
// function App() {
//   return (
//     <>
      
//       <Home />
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Entry from './Entry';
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Entry" element={<Entry/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

