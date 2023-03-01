import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

const ShareModal = ({ isVisible, handleCloseModal }) => {
  return (
    <Modal
      show={isVisible}
      onHide={handleCloseModal}
      keyboard={false}
    >
      <StyledHeader>
        <Modal.Title>Spread the word about this post</Modal.Title>
      </StyledHeader>
      <Modal.Body>
        <div className="d-grid gap-2 mt-4">
          <Button variant="outline-secondary mt-3">Instagram</Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="outline-secondary mt-3">Facebook</Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="outline-secondary mt-3">Twiter</Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="outline-secondary mt-3">Whatsapp</Button>
        </div>
        <div className="d-grid gap-2 mt-5">
          <Button variant="outline-success">Get share link</Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="outline-primary mt-3">Share on Novinator</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShareModal;

const StyledHeader = styled(Modal.Header)`
    border-bottom: 0;
`;
