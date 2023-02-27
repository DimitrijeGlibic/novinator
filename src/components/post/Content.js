import { Swiper, SwiperSlide } from "swiper/react";
import LastSlide from "./LastSlide";
import Slide from "./Slide";

const Content = ({ slides }) => {
  const renderContent = () => {
    return slides.map(({ text }, index) => (
      <SwiperSlide ket={index}>
        <Slide text={text} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
      {renderContent()}
      <SwiperSlide>
        <LastSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Content;
