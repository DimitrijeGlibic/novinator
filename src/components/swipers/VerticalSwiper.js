import styled from "styled-components";
import { Swiper } from "swiper/react";

const VerticalSwiper = ({ initialSlide, onSlideChange, children }) => {
    return (
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={1}
            direction="vertical"
            mousewheel={true}
            initialSlide={initialSlide}
            onSlideChange={onSlideChange}
            speed={1200}
        >
            {children}
        </StyledSwiper>
    );
};

export default VerticalSwiper;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;