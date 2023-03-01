import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import SingleComment from "./SingleComments";

const CommentsSideDrawer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="d-grid gap-2 mt-5">
        <DiscussButton variant="light" onClick={handleShow} >
          <FontAwesomeIcon icon={faComment} />
        </DiscussButton>
      </div>

      <Offcanvas show={show} placement="bottom" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Discussion</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SingleComment />
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default CommentsSideDrawer;

const DiscussButton = styled(Button)`
  font-size: 44px;
`;
