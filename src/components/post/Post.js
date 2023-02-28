import styled from 'styled-components';
import Author from './Author';
import Content from './Content';

const Post = ({ post }) => {
    const { author: { name, score, photo }, title, content, theme } = post;

    return (
        <PostWrapper>
            <Content title={title} slides={content} theme={theme} />
            <PostInfo>
                <Author name={name} score={score} photo={photo} />
            </PostInfo>
        </PostWrapper>
    );
};

export default Post;

const PostWrapper = styled.div`
    position: relative;
    height: 100%;
`;

const PostInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11;
    color: white;
    display: flex;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01));
`;

const PostTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    color: white;
    padding: 24px 16px 32px 16px;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01));
`;
