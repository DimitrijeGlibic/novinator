import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import CommentsSideDrawer from "../Comments/CommentsSideDrawer";

const LastSlide = ({ theme: { background, titleColor, font } }) => {
  return (
    <LastSlideWrapper $background={background} $color={titleColor}>
      <div>
        <ReactionButtonGroup>
          <ReactionButton variant="outline-light">
            <FontAwesomeIcon icon={faThumbsUp} />
          </ReactionButton>
          <ReactionButton variant="outline-light">
            <FontAwesomeIcon icon={faThumbsDown} />
          </ReactionButton>
        </ReactionButtonGroup>
        <CommentsSideDrawer />
      </div>
    </LastSlideWrapper>
  );
};

export default LastSlide;

const LastSlideWrapper = styled.div`
  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  height: 100%;
`;

const ReactionButtonGroup = styled(ButtonGroup)`
  display: flex;
`;

const ReactionButton = styled(Button)`
  font-size: 44px;
  border: 0;
`;
