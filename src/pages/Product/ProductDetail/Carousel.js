import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

// TODO: 이미지 데이터 변경
const imgData = [
  {
    src: 'https://placeimg.com/328/328/nature',
    alt: 'product img',
  },
  {
    src: 'https://placeimg.com/328/328/animal',
    alt: 'product img',
  },
  {
    src: 'https://placeimg.com/328/328/nature/grayscale',
    alt: 'product img',
  },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <StyledSwiper
      pagination={{ type: 'fraction' }}
      loop={true}
      navigation={true}
      modules={[Pagination]}
      className="mySwiper"
      ref={swiperRef}
    >
      {imgData.map(({ src, alt }) => {
        return (
          <SwiperSlide key={src}>
            <Img src={src} alt={alt} />
          </SwiperSlide>
        );
      })}

      <PrevBtn onClick={() => swiperRef.current.swiper.slidePrev()}>
        <FontAwesomeIcon
          className="icon"
          icon="fa-solid fa-chevron-left"
          size="2x"
        />
      </PrevBtn>

      <NextBtn onClick={() => swiperRef.current.swiper.slideNext()}>
        <FontAwesomeIcon
          className="icon"
          icon="fa-solid fa-chevron-right"
          size="2x"
        />
      </NextBtn>
    </StyledSwiper>
  );
};

export default Carousel;

const PrevBtn = styled.div`
  position: absolute;
  left: 10px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  cursor: pointer;

  & .icon * {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const NextBtn = styled.div`
  position: absolute;
  right: 10px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  cursor: pointer;

  & .icon * {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 328px;
  margin: 0;

  .swiper-slide img {
    display: block;
    width: 100%;
    user-select: none;
  }
`;

const Img = styled.img`
  border-radius: 4px;
`;
