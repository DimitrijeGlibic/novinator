import { Container, Form } from "react-bootstrap";
import styled from "styled-components";

const Write = () => {
  return (
    <WriteWrapper>
      <Container>
        <Flex>
          Slajdovi odaberi temu
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Slide title</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Slide content</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Flex>
      </Container>
    </WriteWrapper>
  );
};

export default Write;

const WriteWrapper = styled.div`
    background-color: #f5f5f5;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
