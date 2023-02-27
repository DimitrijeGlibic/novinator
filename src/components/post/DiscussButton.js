import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const DiscussButton = () => {
    return (
        <div className="d-grid gap-2">
            <StyledButton variant="outline-primary">
                <FontAwesomeIcon icon={faComment} />
            </StyledButton>
        </div>
    );
};

export default DiscussButton;

const StyledButton = styled(Button)`
    border-radius: 0px;
    border-left: 0;
    border-right: 0;
    font-size: 25px;
`;
