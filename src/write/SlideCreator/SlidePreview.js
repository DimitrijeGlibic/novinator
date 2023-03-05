import { Form } from "react-bootstrap";
import styled from "styled-components";

const SlidePreview = ({
  text,
  title,
  theme: { background, color, titleColor, font },
}) => {
  const handleChange = (e) => {
    e.target.style.height = "0px";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  };
  return (
    <SlideWrapper $color={color} $background={background} $font={font}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <StyledInputHeading
          as="textarea"
          type="text"
          placeholder="Upisi podnaslov slajda (nije obavezno)"
          $color={titleColor}
          $font={font}
          onChange={handleChange}
          rows={1}
          $isBold
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <StyledInputHeading
          as="textarea"
          type="text"
          placeholder="Upisi sadrzaj slajda"
          $color={color}
          $font={font}
          onChange={handleChange}
          rows={1}
        />
      </Form.Group>
    </SlideWrapper>
  );
};

export default SlidePreview;

const SlideWrapper = styled.div`
  height: 100%;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};

  padding: 100px 16px;
  font-size: 26px;
  line-height: 30px;
  font-family: ${({ $font }) => $font};
`;

const StyledInputHeading = styled(Form.Control)`
  width: 100%;
  color: ${({ $color }) => $color};
  font-weight: ${({ $isBold }) => ($isBold ? "bold" : "400")};
  font-family: ${({ $font }) => $font};
  padding: 0;
  background: transparent;
  border: 0;
  font-size: calc(1.325rem + 0.9vw);
  line-height: 1.2;
  &:focus {
    padding: 0;
    background: transparent;
    border: 0;
    color: ${({ $color }) => $color};
    font-weight: bold;
    font-family: ${({ $font }) => $font};
    box-shadow: none;
  }
`;
