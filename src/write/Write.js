import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeChoser from "./ThemeChoser";

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
      <ThemeChoserWrapper>
        <ThemeChoser />
      </ThemeChoserWrapper>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        style={{ height: "100%", width: "100%" }}
      >
        {renderSlidesPreview()}
      </Swiper>
      <div className="d-grid gap-2 mt-4">
          <PublishButton variant="warning">Publish</PublishButton>
        </div>
    </WriteWrapper>
  );
};

export default Write;

const WriteWrapper = styled.div`
  background-color: green;
  padding: 100px 24px;
  height: 100vh;
  position: relative;
`;

const SlidePreview = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 6px;
`;

const PublishButton = styled(Button)`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`;

const ThemeChoserWrapper = styled.div`
  position: absolute;
  right: 24px;
  left: 80px;
  top: 32px;
`;
