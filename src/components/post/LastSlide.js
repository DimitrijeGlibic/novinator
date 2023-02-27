import styled from "styled-components";
import DiscussButton from "./DiscussButton";
import ReactionButtons from "./ReactionButtons";

const LastSlide = () => {
    return (
        <LastSlideWrapper>
            <div>
                <ReactionButtons />
                <DiscussButton />
            </div>
        </LastSlideWrapper>
    );
};

export default LastSlide;

const LastSlideWrapper = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;