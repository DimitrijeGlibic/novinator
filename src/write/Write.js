import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Write = () => {
  const renderSlidesPreview = () => {
    return [1,2,3,4,5].map((cnt) => (
      <SwiperSlide>
        <SlidePreview>{cnt}</SlidePreview>
      </SwiperSlide>
    ));
  };

  return (
    <WriteWrapper>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        style={{ height: "100%", width: "100%" }}
      >
        {renderSlidesPreview()}
      </Swiper>
    </WriteWrapper>
  );
};

export default Write;

const WriteWrapper = styled.div`
  background-color: green;
  padding: 100px 24px;
  height: 100vh;
`;

const SlidePreview = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 6px;
`;