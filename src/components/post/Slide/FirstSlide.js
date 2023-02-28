import styled from "styled-components";

const FirstSlide = ({ title, theme: { background, titleColor, font } }) => {
  return (
    <SlideWrapper $background={background}>
      <StyledHeading $color={titleColor} $font={font}>{title}</StyledHeading>
    </SlideWrapper>
  );
};

export default FirstSlide;

const SlideWrapper = styled.div`
  height: 100%;
  background-color: ${({ $background }) => $background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 24px;
  font-size: 22px;
  line-height: 24px;
`;

const StyledHeading = styled.h1`
    color: ${({ $color }) => $color};
    font-weight: bold;
    font-family: ${({ $font }) => $font};
`;
