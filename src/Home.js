import React, { useState } from "react";
import nami from "./assets/beautiful-nami-one-piece-desktop-wallpaper.jpg";
import luffy from "./assets/funny-monkey-d-luffy-with-swords-desktop-wallpaper.jpg";
import styled, { keyframes } from "styled-components";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: nami,
      title: "Beautiful Nami",
      description: "Nami from One Piece",
    },
    {
      src: luffy,
      title: "Funny Monkey D. Luffy",
      description: "Luffy with swords from One Piece",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <Wrapper>
      <div className="hero">
        <div className="image-container">
          <img src={currentImage.src} alt={currentImage.description} />
          <div className="details">
            <h1 className="title">{currentImage.title}</h1>
            <p className="description">{currentImage.description}</p>
          </div>
        </div>
      </div>

      <div className="arrows">
        <span onClick={handlePrev}>
          <ImArrowLeft />
        </span>
        <span onClick={handleNext}>
          <ImArrowRight />
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  max-width: 100%;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  .hero {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .image-container {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .details {
    position: absolute;
    width: 100%;
    top: 80%;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
  }
  .arrows {
    position: absolute;
    width: 100%;
    top: 80%;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: 0 20px; */
    span {
      font-size: 2.5rem;
      cursor: pointer;
      &:hover {
        animation: ${shake} 0.5s;
        animation-iteration-count: infinite;
      }
    }
  }
`;
export default Home;
