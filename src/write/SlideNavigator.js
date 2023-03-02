import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideNavigator = () => {
  const renerThemeSlides = () => {
    return [1, 2, 3, 4, 5].map((num) => (
      <SwiperSlide>
        <SingleSlidePreview>slide {num}</SingleSlidePreview>
      </SwiperSlide>
    ));
  };
  return (
    <SlideNavigatorWrapper>
      <Swiper
        spaceBetween={16}
        slidesPerView={2.3}
        style={{ height: "200px", width: "100%" }}
      >
        {renerThemeSlides()}
      </Swiper>
    </SlideNavigatorWrapper>
  );
};

export default SlideNavigator;

const SingleSlidePreview = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
`;

const SlideNavigatorWrapper = styled.div`
    margin-bottom: 24px;
`;