import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const ReactionButtons = () => {
    return (
        <div className="d-grid gap-2">
            <ButtonGroup>
                <StyledButton variant="outline-success">
                    <FontAwesomeIcon icon={faThumbsUp} />
                </StyledButton>
                <StyledButton variant="outline-danger">
                    <FontAwesomeIcon icon={faThumbsDown} />
                </StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default ReactionButtons;

const StyledButton = styled(Button)`
    border-radius: 0;
    border: 0;
    &:first-child {
        border-right: 1px solid;
    }
    font-size: 25px;
`;
