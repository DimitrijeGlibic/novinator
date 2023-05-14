import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { ModalContext } from "../App";

const LogInModal = ({ isVisible }) => {
    // const setIsModalOpen = useContext(ModalContext);
    const [rememberMe, setRememberMe] = useState(true);


    const handleCloseModal = () => {
        // setIsModalOpen(false);
    }

    const onRememberMeChange = () => {
        // setRememberMe((oldValue) => !oldValue);
    }

    return (
        <Modal
            show={isVisible}
            onHide={handleCloseModal}
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <Form.Group className="mt-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" checked={rememberMe} onChange={onRememberMeChange} />
                    </Form.Group>
                    <LoginWithTitle>Or login with</LoginWithTitle>
                    <div className="d-flex gap-2 justify-content-center mt-3">
                        <GoogleButton variant="outline-danger">
                            <StyledIcon icon={faGoogle} />Google
                        </GoogleButton>
                        <FacebookButton variant="outline-primary">
                            <StyledIcon icon={faFacebookF} />Facebook
                        </FacebookButton>
                        <TwitterButton variant="outline-primary">
                            <StyledIcon icon={faTwitter} />Twitter
                        </TwitterButton>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LogInModal;

const LoginWithTitle = styled.div`
    text-align: center;
    margin-top: 32px;
    font-style: italic;
`;

const GoogleButton = styled(Button)`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    color: #DB4437;
    border-color: #DB4437;
    &:hover,
    &:focus,
    &:active{
        border-color: #DB4437 !important;
        background-color: #DB4437 !important;
    }
`;
const FacebookButton = styled(Button)`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    color: #4267B2;
    border-color: #4267B2;
    &:hover,
    &:focus,
    &:active{
        border-color: #4267B2 !important;
        background-color: #4267B2 !important;
    }
`;
const TwitterButton = styled(Button)`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    color: #1DA1F2;
    border-color: #1DA1F2;
    &:hover,
    &:focus,
    &:active{
        border-color: #1DA1F2 !important;
        background-color: #1DA1F2 !important;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;