import styled from 'styled-components';
import Author from './Author';
import Content from './Content';

const Post = ({ post }) => {
    const { author: { name, score, photo }, title, content } = post;

    return (
        <PostWrapper>
            <PostTitle><span>{title}</span></PostTitle>
            <Content slides={content} />
            <PostInfo>
                <Author name={name} score={score} photo={photo} />
            </PostInfo>
        </PostWrapper>
    );
};

export default Post;

const PostWrapper = styled.div`
    position: relative;
    margin: 20px 0;
`;

const PostInfo = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    z-index: 11;
    color: white;

    display: flex;
`;

const PostTitle = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    z-index: 11;
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    color: white;
`;
