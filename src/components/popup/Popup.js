import React from 'react';
import './styles.css';

function Popup({ imgSrc, closePopup }) {
  return (
    <div className="popup">
      <div className="popup__wrapper">
        <button className="popup__close" onClick={closePopup}>x</button>
        <img src={imgSrc} className="popup__picture" />
      </div>
    </div>
  )
}

export default Popup;
