import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/contact';
import Work from './components/Work';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Signin from './components/signin'; // Import the SignIn component
import Signup from './components/signup'; // Import the SignUp componen

function App() {
  return (
    <div className='bg-white bg-no-repeat bg-cover overflow-hidden'>
      <Router>
        
        <Nav />
        <Routes>
          {/* Define the route for the Work component */}
          <Route path="/work" element={<Work />} />
          {/* Other routes for your application */}
          <Route path="/" element={<Banner />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <About />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
