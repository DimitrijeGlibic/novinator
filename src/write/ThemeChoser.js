import { Fragment, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const ThemeChoser = ({ themes, onThemeSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const renerThemeSlides = () => {
    return themes.map(({ background, color }, index) => (
      <SwiperSlide>
        <SingleThemeSlide
          $background={background}
          $color={color}
          onClick={() => onThemeSelect(index)}
          key={index}
        >
          theme {index}
        </SingleThemeSlide>
      </SwiperSlide>
    ));
  };

  const showThemeChoser = () => {
    setIsVisible(true);
  };

  const hideThemeChoser = () => {
    setIsVisible(false);
  };

  return (
    <Fragment>
      <ThemeChoserButton variant="outline-light" onClick={showThemeChoser}>
        Change theme
      </ThemeChoserButton>

      <Offcanvas show={isVisible} placement="top" onHide={hideThemeChoser}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chose theme</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Swiper
            spaceBetween={16}
            slidesPerView={4.3}
            style={{ width: "100%" }}
          >
            {renerThemeSlides()}
          </Swiper>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default ThemeChoser;

const SingleThemeSlide = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  border-radius: 6px;
`;

const ThemeChoserButton = styled(Button)`
  position: absolute;
  top: 40px;
  right: 24px;
  z-index: 2;
  border-radius: 6px;
`;
