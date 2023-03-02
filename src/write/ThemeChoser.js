import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const ThemeChoser = () => {
  const renerThemeSlides = () => {
    return [1, 2, 3, 4, 5].map((num) => (
      <SwiperSlide>
        <SingleThemeSlide>theme {num}</SingleThemeSlide>
      </SwiperSlide>
    ));
  };
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={3.3}
      style={{ height: "200px", width: "100%" }}
      centeredSlides
    >
      {renerThemeSlides()}
    </Swiper>
  );
};

export default ThemeChoser;

const SingleThemeSlide = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
`;
