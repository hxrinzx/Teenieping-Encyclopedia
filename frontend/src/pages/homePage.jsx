import React from "react";
import { Link } from "react-router-dom";
import "../styles/homePage.css";
import heartspingImg from "../styles/images/heartsping.png";
import effectImg from "../styles/images/effect.png";
export default function HomePage() {
  return (
    <div className="home-page">
      <img src={effectImg} alt="Effect" className="effect" />
      <img src={heartspingImg} alt="Heartsping" className="heartsping" />
      <button className="see-characters-btn">
        <Link
          to="/characters"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          티니핑 캐릭터 보러가기
        </Link>
      </button>
      <div class="speech-bubble">
        이모션 왕국에 온 걸 환영해 츄! <br /> 나와 같이 티니핑 친구들을
        알아보자!
      </div>
    </div>
  );
}
