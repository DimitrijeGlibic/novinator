import styled from "styled-components";

const Slide = ({ text }) => {
    return (
        <SlideWrapper>
            {text}
        </SlideWrapper>

    );
};

export default Slide;

const SlideWrapper = styled.div`
    height: 100%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 16px;
    font-size: 22px;
    line-height: 24px;
`;