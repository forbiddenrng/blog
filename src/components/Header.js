import React from 'react';
import onePhoto from '../img/one.jpg';
import twoPhoto from '../img/two.jpg';
import threePhoto from '../img/three.jpg';
import fourPhoto from '../img/four.jpg';
import './Header.css';
const Header = () => {
  return (
    < header >
      <div className="item">
        <img src={onePhoto} alt="Photo1"></img>
        <div className="div_header">Witaj na blogu</div>
      </div>
      <div className="item">
        <img src={twoPhoto} alt="Photo2"></img>
        <div className="div_header">Zainspiruj się</div>
      </div>
      <div className="item">
        <img src={threePhoto} alt="Photo3"></img>
        <div className="div_header">Podziwiaj świat</div>
      </div>
      <div className="item">
        <img src={fourPhoto} alt="Photo4"></img>
        <div className="div_header">Podziel się doświadczeniami</div>
      </div>
    </header >
  );
}

export default Header;