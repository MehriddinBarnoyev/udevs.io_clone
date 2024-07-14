import styled, { keyframes } from 'styled-components';
import { Box, Typography } from '@mui/material';

// Animations
const scrollLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled Components
const CarouselContainer = styled(Box)`
  overflow: hidden;
`;

const CarouselRow = styled(Box)`
  display: flex;
  white-space: nowrap;
  margin-bottom: 20px;

  &:nth-child(odd) {
    animation: ${scrollLeft} 120s linear infinite;
  }

  &:nth-child(even) {
    animation: ${scrollRight} 120s linear infinite;
  }
`;

const CarouselItem = styled(Box)`
  display: inline-block;
  margin: 10px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.bgColor || '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
`;

const ItemName = styled(Typography)`
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;

export { CarouselContainer, CarouselRow, CarouselItem, ItemImage, ItemName };
