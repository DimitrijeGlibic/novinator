import { Button, Modal } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignInModal = () => {
    console.log('usao');
    const navigate = useNavigate();
  return (
    <Modal show={true} onHide={() => navigate(-1)} keyboard={false}>
      <StyledHeader>
        <Modal.Title>SignIn</Modal.Title>
      </StyledHeader>
      <Modal.Body>
        <div className="d-grid gap-2 mt-4">
          <Button variant="outline-secondary mt-3">Instagram</Button>
        </div>
      </Modal.Body>
      <Outlet />
    </Modal>
  );
};

export default SignInModal;

const StyledHeader = styled(Modal.Header)`
  border-bottom: 0;
`;
