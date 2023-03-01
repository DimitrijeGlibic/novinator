import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Author from './Author';
import Content from './Content';

const Post = ({ post }) => {
    const { author: { name, score, photo }, title, content, theme } = post;

    return (
        <PostWrapper>
            <ShareButton variant="outline-light">
                <FontAwesomeIcon icon={faShare} />
            </ShareButton>
            <Content title={title} slides={content} theme={theme} />
            <PostInfo>
                <Author name={name} score={score} photo={photo} />
                <FollowBtnWrapper><Button variant="outline-light" size="sm">Follow</Button></FollowBtnWrapper>
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
    padding: 24px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11;
    color: white;
    display: flex;
    justify-content: space-between;
`;

const FollowBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ShareButton = styled(Button)`
    position: absolute;
    top: 8px;
    right: 16px;
    z-index: 2;
    border: 0;
    font-size: 32px;
    border-radius: 50%;
`;