import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./CharacterModal"; // 모달 컴포넌트 불러오기
import "../styles/CharacterList.css";

import titleImage from "../styles/images/title.png";
import prevArrow from "../styles/images/leftArrow.png"; // 이전 화살표 이미지 불러오기
import nextArrow from "../styles/images/rightArrow.png";
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 선택한 캐릭터 상태
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const charactersPerPage = 12; // 한 페이지에 표시할 캐릭터 수

  useEffect(() => {
    // 캐릭터 데이터를 가져오는 API 호출
    axios
      .get("http://localhost:3002/api/characters")
      .then((response) => {
        setCharacters(response.data); // 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
  }, []);

  // 현재 페이지에 표시할 캐릭터 계산
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character); // 선택한 캐릭터 저장
    setShowModal(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  // 페이지 변경 함수
  const handleNextPage = () => {
    if (currentPage < Math.ceil(characters.length / charactersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="character-container">
      <img src={titleImage} alt="제목 이미지" className="title-image" />
      <div className="character-list-wrapper">
        <div className="character-list">
          {currentCharacters.map((character) => (
            <div
              key={character.id}
              className={`character-card ${
                character.type === "loyal" ? "loyal" : "basic"
              }`}
              onClick={() => handleCharacterClick(character)} // 캐릭터 클릭 시 모달 열기
            >
              <img
                src={`http://localhost:3002${character.image}`}
                alt={character.name}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 좌우 페이지 버튼 */}
      <img
        src={prevArrow}
        alt="이전"
        className="prev-button"
        onClick={handlePrevPage}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      />
      <img
        src={nextArrow}
        alt="다음"
        className="next-button"
        onClick={handleNextPage}
        style={{
          opacity:
            currentPage === Math.ceil(characters.length / charactersPerPage)
              ? 0.5
              : 1,
        }}
      />
      <Modal
        show={showModal}
        character={selectedCharacter}
        onClose={handleCloseModal} // 모달 닫기 함수 전달
      />
    </div>
  );
};

export default CharacterList;
