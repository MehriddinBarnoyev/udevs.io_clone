import React from 'react';
import { Typography } from '@mui/material';
import { CarouselContainer, CarouselItem, CarouselRow, ItemName } from './Carusel';
import Image from 'next/image';

// Sample data for the carousel
const items = [
  { name: 'Delever', color: '#FF6B35', imgSrc: 'https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png' },
  { name: 'Fonon', color: '#FFD600', imgSrc: 'https://api.logobank.uz/media/logos_png/Fonon-01.png' },
  { name: 'Hamkorbank', color: '#00BFFF', imgSrc: 'https://api.logobank.uz/media/logos_preview/preview-01.png' },
  { name: 'Hosimov Iqtisodiyoti', color: '#6B8E23', imgSrc: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7ea61860-739a-4d0f-a841-4e89128f0bd8_799x799.png' },
  { name: 'Iman', color: '#32CD32', imgSrc: 'https://i0.wp.com/ifnfintech.com/wp-content/uploads/2021/05/iman-logo.png?fit=322%2C150&ssl=1' },
  { name: 'Akfa Medline', color: '#FF4500', imgSrc: 'https://api.logobank.uz/media/logos_png/akfa_medline-01.png' },
  { name: 'Delever', color: '#FF6B35', imgSrc: 'https://seeklogo.com/images/F/food-delivery-symbol-logo-37F3E64A34-seeklogo.com.png' },
  { name: 'Fonon', color: '#FFD600', imgSrc: 'https://api.logobank.uz/media/logos_png/Fonon-01.png' },
  { name: 'Hamkorbank', color: '#00BFFF', imgSrc: 'https://api.logobank.uz/media/logos_preview/preview-01.png' },
  { name: 'Hosimov Iqtisodiyoti', color: '#6B8E23', imgSrc: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7ea61860-739a-4d0f-a841-4e89128f0bd8_799x799.png' },
  { name: 'Iman', color: '#32CD32', imgSrc: 'https://i0.wp.com/ifnfintech.com/wp-content/uploads/2021/05/iman-logo.png?fit=322%2C150&ssl=1' },
  { name: 'Akfa Medline', color: '#FF4500', imgSrc: 'https://api.logobank.uz/media/logos_png/akfa_medline-01.png' },
  // Add more items as needed
];

const Carousel = () => {
  return (
    <CarouselContainer>
      <Typography
        fontWeight={700}
        color="#1b5bf7"
        fontSize={{ xs: "30px", sm: "40px", md: "50px", lg: "60px" }}
        fontFamily="Manrope, sans-serif"
        marginTop={"40px"}
      >
        Our clients
      </Typography>
      <CarouselRow>
        {items.map((item, index) => (
          <CarouselItem key={index} bgColor={item.color}>
            <Image src={item.imgSrc} alt={item.name} width={100} height={100} />
            <ItemName>{item.name}</ItemName>
          </CarouselItem>
        ))}
      </CarouselRow>
      <CarouselRow>
        {items.map((item, index) => (
          <CarouselItem key={index} bgColor={item.color}>
            <Image src={item.imgSrc} alt={item.name} width={100} height={100} />
            <ItemName>{item.name}</ItemName>
          </CarouselItem>
        ))}
      </CarouselRow>
    </CarouselContainer>
  );
};

export default Carousel;
