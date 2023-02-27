import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ReactionButtons = () => {
    return (
        <div className="d-grid gap-2">
            <ButtonGroup>
                <Button variant="success">Like</Button>
                <Button variant="danger">DisLike</Button>
            </ButtonGroup>
        </div>
    );
}

export default ReactionButtons;