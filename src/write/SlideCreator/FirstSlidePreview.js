import { Form } from "react-bootstrap";

import styled from "styled-components";

const FirstSlidePreview = ({ theme: { background, titleColor, font } }) => {

  const handleChange = (e) => {
    e.target.style.height = '0px';
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height =  `${scrollHeight}px`;
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
            rows={1}
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
