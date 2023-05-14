import React, { useContext, useRef, useState } from "react"
import { AuthModalContext } from "../context/AuthModalContext";
import { Button, Form, Modal } from "react-bootstrap";
import styled from "styled-components";

const AuthModal = ({ isVisible }) => {
    const setIsAuthModalOpen = useContext(AuthModalContext);
    const [isCodeFieldVisible, setIsCodeFieldVisible] = useState(false);
    const [activeCodeIndex, setActiveCodeIndex] = useState(1);
    const continueButtonRef = useRef(null);

    const handleCloseModal = () => {
        setIsAuthModalOpen(false);
    };

    const handleContinueClick = () => {
        continueButtonRef.current.blur();
        setIsCodeFieldVisible(true);
    }

    const onCodeInputChange = (currentCodeIndex) => () => {
        setActiveCodeIndex(currentCodeIndex + 1);
        const active = document.activeElement;
        if (active?.nextElementSibling) {
            (active.nextElementSibling).focus();
        }
    };

    const renderCodeFiled = () => (
        <CodePartWrapper>
            <CodeInfo>Poslali smo kod na vas email, unesite ga:</CodeInfo>
            <div className="d-flex gap-2 justify-content-center">
                {[1, 2, 3, 4, 5].map((value) =>
                    <SingleCodeInput type="number" autoFocus={value === activeCodeIndex} onChange={onCodeInputChange(value)} key={value} />
                )}
            </div>
            <CodeSentFailed className="text-primary">Niste dobili email?</CodeSentFailed>
        </CodePartWrapper>
    );

    return (
        <Modal
            show={isVisible}
            onHide={handleCloseModal}
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Napravite nalog ili se ulogujte</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Unesite email" />
                        {!isCodeFieldVisible && <AuthInfo className="text-muted">
                            Ukoliko vec imate nalog, unesite email od tog naloga
                        </AuthInfo>}
                    </Form.Group>

                    {isCodeFieldVisible && renderCodeFiled()}
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary" onClick={handleContinueClick} ref={continueButtonRef}>
                            Nastavi
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;

const CodePartWrapper = styled.div`
    margin-bottom: 24px;
`;

const SingleCodeInput = styled(Form.Control)`
    width: 40px;
    text-align: center;
`;

const CodeInfo = styled.div`
    margin-bottom: 8px;
    font-size: 12px;
    text-align: center;
`;

const CodeSentFailed = styled.div`
    text-decoration: underline;
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
`;

const AuthInfo = styled(Form.Text)`
    font-size: 12px;
    
`;
