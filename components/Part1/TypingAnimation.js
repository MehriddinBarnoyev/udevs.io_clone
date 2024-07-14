import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for typing animation
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

// Styled component for typing effect
const TypingText = styled.span`
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid;
  white-space: nowrap;
  animation: ${blink} 0.75s step-end infinite;
`;

const TypingAnimation = ({ texts, typingSpeed = 100, delayBetweenTexts = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeout;
    let index = 0;

    const type = () => {
      setDisplayedText(texts[currentTextIndex].substring(0, index));
      index++;

      if (index <= texts[currentTextIndex].length) {
        timeout = setTimeout(type, typingSpeed); // Adjust the typing speed here
      } else {
        timeout = setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          index = 0;
        }, delayBetweenTexts); // Delay before typing the next text
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [currentTextIndex, texts, typingSpeed, delayBetweenTexts]);

  return (
    <div ref={containerRef}>
      <TypingText>{displayedText}</TypingText>
    </div>
  );
};

export default TypingAnimation;
