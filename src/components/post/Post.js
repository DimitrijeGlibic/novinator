import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Author from './Author';
import Content from './Content';
import DiscussButton from './DiscussButton';
import ReactionButtons from './ReactionButtons';

const Post = ({ post }) => {
    const { author: { name, score, photo }, title, content } = post;

    return (
        <PostWrapper>
            <Author name={name} score={score} photo={photo} />
            {/* <div>{title}</div> */}
            <Content slides={content} />
            <ReactionButtons />
            <DiscussButton />
        </PostWrapper>
    );
};

export default Post;

const PostWrapper = styled.div`
    position: relative;
`;
