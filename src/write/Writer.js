import { Form } from "react-bootstrap";
import styled from "styled-components";

const Writer = () => {
  return (
    <WriterWrapper>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Slide title</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Slide content</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </WriterWrapper>
  );
};

export default Writer;

const WriterWrapper = styled.div`
    margin-bottom: 24px;
`;