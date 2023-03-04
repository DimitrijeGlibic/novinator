import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import FirstSlidePreview from "./SlideCreator/FirstSlidePreview";
import SlidePreview from "./SlideCreator/SlidePreview";

export const CreatePost = ({ themes }) => {
  const defaultTheme = themes[1];

  return (
    <SlideWrapper>
      <ThemeChoserButton variant="outline-light">
        Change theme
      </ThemeChoserButton>
      <Swiper spaceBetween={0} slidesPerView={1} style={{ height: "100%" }}>
        <SwiperSlide>
          <FirstSlidePreview theme={defaultTheme} />
        </SwiperSlide>
        <SwiperSlide>
          <SlidePreview theme={defaultTheme} title="Podnaslov za drugi slajd" text="opsis nesto" />
        </SwiperSlide>
        {/* {renderContent()} */}
        {/* <SwiperSlide>
        <LastSlide theme={theme} />
      </SwiperSlide> */}
      </Swiper>
      <div className="d-grid gap-2 mt-4">
        <PublishButton variant="outline-light">Publish</PublishButton>
      </div>
    </SlideWrapper>
  );
};

export default CreatePost;

const SlideWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const ThemeChoserButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 24px;
  z-index: 2;
  border-radius: 6px;
`;

const PublishButton = styled(Button)`
    position: absolute;
    bottom: 32px;
    right: 24px;
    left: 24px;
    z-index: 2;
`;