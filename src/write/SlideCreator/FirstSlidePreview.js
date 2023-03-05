import { useState } from "react";
import { Form } from "react-bootstrap";

import styled from "styled-components";

const FirstSlidePreview = ({ theme: { background, titleColor, font } }) => {
  const [currentTitle, setCurrentTitle] = useState("Upisi naslov posta");
  const [currentRows, setCurrentRows] = useState(1);

  const handleChange = (e) => {
    setCurrentRows( Math.floor(e.target.scrollHeight / 32.88));
  }

  return (
    <SlideWrapper $background={background}>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <StyledInputHeading
            as="textarea"
            type="text"
            placeholder="Upisi naslov posta"
            $color={titleColor}
            $font={font}
            onChange={handleChange}
            rows={currentRows}
          />
        </Form.Group>
      </Form>
    </SlideWrapper>
  );
};

export default FirstSlidePreview;

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

const StyledInputHeading = styled(Form.Control)`
  width: 100%;
  color: ${({ $color }) => $color};
  font-weight: bold;
  font-family: ${({ $font }) => $font};
  padding: 0;
  background: transparent;
  border: 0;
  font-size: 27.4px;
  line-height: 32.88px;
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
