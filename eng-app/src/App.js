
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/navbar/navbar'
import Gallery from './components/gallery/gallery.js';


function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Gallery/>
    </React.Fragment>
  );
}

export default App;
