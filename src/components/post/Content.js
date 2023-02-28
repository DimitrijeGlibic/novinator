import { Swiper, SwiperSlide } from "swiper/react";
import FirstSlide from "./Slide/FirstSlide";
import LastSlide from "./Slide/LastSlide";
import Slide from "./Slide/Slide";

const Content = ({ title, slides, theme }) => {
  const renderContent = () => {
    return slides.map(({ text, title }, index) => (
      <SwiperSlide key={index}>
        <Slide title={title} text={text} theme={theme} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper spaceBetween={0} slidesPerView={1} style={{height: '100%'}}>
      <SwiperSlide>
        <FirstSlide title={title} theme={theme} />
      </SwiperSlide>
      {renderContent()}
      <SwiperSlide>
        <LastSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Content;
