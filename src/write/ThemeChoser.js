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
    <ThemeChoserWrapper>
      <Swiper
        spaceBetween={16}
        slidesPerView={3.3}
        style={{ width: "100%" }}
      >
        {renerThemeSlides()}
      </Swiper>
    </ThemeChoserWrapper>
  );
};

export default ThemeChoser;

const SingleThemeSlide = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
`;

const ThemeChoserWrapper = styled.div``;
