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
            <PostInfo>
                <Author name={name} score={score} photo={photo} />
                <PostTitle><span>{title}</span></PostTitle>
            </PostInfo>
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

const PostInfo = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 1;
    color: white;

    display: flex;
`;

const PostTitle = styled.div`
    font-weight: bold;
    margin-left: 32px;
    font-size: 12px;
`;
