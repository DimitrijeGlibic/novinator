import styled from "styled-components";

const Slide = ({ text, title, theme: { background, color, titleColor, font } }) => {
  return (
    <SlideWrapper $color={color} $background={background} $font={font}>
      {title && (<StyledHeading $color={titleColor}>{title}</StyledHeading>)}
      <p>{text}</p>
    </SlideWrapper>
  );
};

export default Slide;

const SlideWrapper = styled.div`
  height: 100%;
  background-color: ${({$background}) => $background};
  color: ${({$color}) => $color};

  padding: 100px 16px;
  font-size: 26px;
  line-height: 30px;
  font-family: ${({ $font }) => $font};
`;

const StyledHeading = styled.h2`
    color: ${({ $color }) => $color};
    font-weight: bold;
    font-family: ${({ $font }) => $font};
`;
