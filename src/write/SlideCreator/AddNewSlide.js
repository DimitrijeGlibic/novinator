import { Button } from "react-bootstrap";
import styled from "styled-components";

const AddNewSlide = ({ theme: { background }, addNewSlide }) => {
  return (
    <SlideWrapper $background={background}>
      <div className="d-grid gap-2 mt-4">
        <Button variant="outline-light" onClick={addNewSlide}>Add new slide</Button>
      </div>
    </SlideWrapper>
  );
};

export default AddNewSlide;

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
