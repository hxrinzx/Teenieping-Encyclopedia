import React from "react";
import "../styles/CharacterModal.css"; // 모달 스타일
const API_URL = process.env.REACT_APP_API_URL;
const CharacterModal = ({ show, character, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <img
          src={`${process.env.REACT_APP_API_URL}${character.image}`}
          alt={character.name}
        />
        <h2>{character.name}</h2>
        <p>{character.characteristic}</p>
        <p>소품: {character.signature}</p>
        <p>Type: {character.type}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
