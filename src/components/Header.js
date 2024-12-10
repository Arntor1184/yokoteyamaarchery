import React, { useState } from 'react';
import './Header.css'; 
import logo from '../images/YAClogo.webp';

const Header = ({ navLinks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search term.');
      return;
    }

    let matchFound = false;
    setNoResults(false);

    
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach((element) => {
      element.classList.remove('highlight');
    });

    
    const pageContent = document.body;
    const matches = [];

    
    const searchNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const matchIndex = node.textContent.toLowerCase().indexOf(searchQuery.toLowerCase());
        if (matchIndex !== -1) {
          const span = document.createElement('span');
          span.className = 'highlight';
          const highlightedText = node.textContent.substring(matchIndex, matchIndex + searchQuery.length);
          span.textContent = highlightedText;
          const textBeforeMatch = node.textContent.substring(0, matchIndex);
          const textAfterMatch = node.textContent.substring(matchIndex + searchQuery.length);

          
          const newNode = document.createTextNode(textBeforeMatch);
          node.parentNode.insertBefore(newNode, node);
          node.parentNode.insertBefore(span, node);
          node.parentNode.insertBefore(document.createTextNode(textAfterMatch), node);
          node.parentNode.removeChild(node);
          
          matches.push(span); 
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(searchNode); 
      }
    };

    searchNode(pageContent); 

    if (matches.length > 0) {
      matchFound = true;
      matches[0].scrollIntoView({ behavior: 'smooth' }); 
    }

    if (!matchFound) {
      setNoResults(true); 
    }
  };

  return (
    <header className="sticky-header">
      <div className="header_container">
       
        <img src={logo} alt="Yokoteyama Archery Club" className="logo" />
       
        <nav>
          {navLinks && navLinks.length > 0 ? (
            navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
              >
                {link.text}
              </a>
            ))
          ) : (
            <p>No navigation links provided.</p>
          )}
        </nav>

      
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {noResults && <p>No results found</p>} 
      </div>
    </header>
  );
};

export default Header;