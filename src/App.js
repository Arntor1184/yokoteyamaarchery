import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Photos from './components/Photos';
import Lessons from './components/Lessons';
import Shop from './components/Shop';
import Tournaments from './components/Tournaments';
import Contact from './components/Contact';
import Aside from './components/Aside';
import Footer from './components/Footer';


const navLinks = [
  { text: 'Introduction', href: '#introduction' },
  { text: 'Photos', href: '#photos' },
  { text: 'Lessons', href: '#lessons' },
  { text: 'Equipment Shop', href: '#shop' },
  { text: 'Tournaments', href: '#tournaments' },
  { text: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <main>
      <Banner/>
      <div className="main-container">
        <div className="content">
          <Introduction />
          <Photos />
          <Lessons />
          <Shop />
          <Tournaments />
          <Contact />
          </div>
         <Aside />
         </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;