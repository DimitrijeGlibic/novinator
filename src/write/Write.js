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
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        style={{ width: "100%" }}
      >
        {renderSlidesPreview()}
      </Swiper>
      <ThemeChoserWrapper>
        <ThemeChoser />
      </ThemeChoserWrapper>
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
  position: relative;
  height: 100vh;
`;

const SlidePreview = styled.div`
  width: 100%;
  height: 60vh;
  background-color: red;
  border-radius: 6px;
`;

const PublishButton = styled(Button)`
`;

const ThemeChoserWrapper = styled.div`
  margin-top: 32px;
`;
