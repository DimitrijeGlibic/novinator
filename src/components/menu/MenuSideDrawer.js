import React, { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import styled, {css} from "styled-components";

const MenuSideDrawer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <PersonalButton variant="outline-light" onClick={handleShow} $show={show}>
        <FontAwesomeIcon icon={faUser} />
      </PersonalButton>

      <SideDrawer show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dimitrije Glibic</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Sitch to personal mode</Nav.Link>
            <Nav.Link href="/home">Write a story</Nav.Link>
            <Nav.Link eventKey="link-1">Invite friends</Nav.Link>
            <Nav.Link eventKey="link-2">Settings</Nav.Link>
            <Nav.Link eventKey="link-3">
              Log out
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </SideDrawer>
    </Fragment>
  );
};

export default MenuSideDrawer;

const PersonalButton = styled(Button)`
  position: fixed;
  left: 0;
  top: 32px;
  z-index: 11;
  border-width: 3px;
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  font-size: 22px;
  padding-right: 16px;
`;

const SideDrawer = styled(Offcanvas)`
  width: 80% !important;
`;