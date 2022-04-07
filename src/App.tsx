import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <MainBody/>
     <Footer/>
    </div>
  );
}

export default App;
