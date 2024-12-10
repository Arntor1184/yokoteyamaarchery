import React from 'react';
import './Introduction.css'; 
import ArthurImage from '../images/Arthur.jpeg';


const Introduction = () => {
  return (
    <>
      <section id="introduction">
        <h2>Welcome to the Yokoteyama Archery Club</h2>
        <div className="introduction_container">
          <div className="arthur">
            <img src={ArthurImage} alt="Arthur Kitagawa" />
          </div>
          <div className="introduction">
            <p className="introduction_text">
              Hello there my friends and welcome to the Yokoteyama Archery Academy. 
              My name is Arthur "Rawhide" Kitagawa, master archer. I've travelled the 
              world entering archery tournaments on every continent. I've spent the last 
              few years hunting the seven legendary Beasts of the Unlight. I have now entered 
              a state of dormancy while I wait for signs of activity of two of the beasts 
              that are said to live on this mountain, the poisonous Rotboar and the mighty
              Hammer Fisted Black Bear. These days I run this archery range, 
              conduct lessons and take fellow hunters on guided trips through 
              the surrounding forests. Whether you are a horseback archer or a 
              complete beginner you are more than welcome to join me on my quest
              for perfect aim and ultimate focus. Hope to see you soon!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
