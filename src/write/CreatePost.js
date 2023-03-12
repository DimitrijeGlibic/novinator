import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FirstSlidePreview from "./SlideCreator/FirstSlidePreview";
import SlidePreview from "./SlideCreator/SlidePreview";
import "swiper/css/pagination";
import AddNewSlide from "./SlideCreator/AddNewSlide";
import { useState } from "react";
import ThemeChoser from "./ThemeChoser";

export const CreatePost = ({ themes }) => {
  const [selectedTheme, setSelectedTheme] = useState(1);

  const [slidesCount, setSlidesCount] = useState(1);

  const addNewSlide = () => {
    setSlidesCount((oldValue) => oldValue + 1);
  };

  const onThemeSelect = (themeIndex) => {
    setSelectedTheme(themeIndex);
  };

  const renderSlidesPreview = () => {
    return [...Array(slidesCount).keys()].map((slide, index) => (
      <SwiperSlide>
        <SlidePreview
          theme={themes[selectedTheme]}
          title="Podnaslov za drugi slajd"
          text="opsis nesto"
        />
      </SwiperSlide>
    ));
  };

  return (
    <SlideWrapper>
      <ThemeChoser
        themes={themes}
        selectedTheme={selectedTheme}
        onThemeSelect={onThemeSelect}
      />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ height: "100%" }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <FirstSlidePreview theme={themes[selectedTheme]} />
        </SwiperSlide>
        {renderSlidesPreview()}
        <SwiperSlide>
          <AddNewSlide
            theme={themes[selectedTheme]}
            addNewSlide={addNewSlide}
          />
        </SwiperSlide>
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

const PublishButton = styled(Button)`
  position: absolute;
  bottom: 32px;
  right: 24px;
  left: 24px;
  z-index: 2;
`;
