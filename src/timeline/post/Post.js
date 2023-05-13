import { faBullhorn, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import ShareModal from './share/ShareModal';
import Author from './Author';
import Content from './Content';
import { useSwiperSlide } from 'swiper/react';
import PostMetaTags from './PostMetaTags';
import { UserContext } from '../../context/UserContext';
import { ModalContext } from '../../App';

const Post = ({ post }) => {
    const user = useContext(UserContext);
    const setIsModalOpen = useContext(ModalContext);
    const { author: { name, score, photo }, title, content, theme } = post;
    const [isShareModalVisible, setIsShareModalVisible] = useState(false);
    const { isActive } = useSwiperSlide();

    const handleShareButtonClick = () => {
        setIsShareModalVisible(true);
    }

    const closeModal = () => {
        setIsShareModalVisible(false);
    }

    const onFollowButtonClick = () => {
        if (user.isLoggedIn) {
            console.log("now folowing");
        }
        else {
            console.log('login first');
            setIsModalOpen(true);
        }
    }

    return (
        <PostWrapper>
            <PostMetaTags post={post} isActive={isActive} />
            <ShareButton variant="outline-light" onClick={handleShareButtonClick}>
                <FontAwesomeIcon icon={faBullhorn} />
            </ShareButton>
            <Content title={title} slides={content} theme={theme} />
            <PostInfo>
                <Author name={name} score={score} photo={photo} />
                <FollowBtnWrapper><Button variant="outline-light" size="sm" onClick={onFollowButtonClick}>Follow</Button></FollowBtnWrapper>
            </PostInfo>

            <ShareModal isVisible={isShareModalVisible} handleCloseModal={closeModal} />
            <ReadButton variant="outline-light">
                <FontAwesomeIcon icon={faVolumeHigh} />
            </ReadButton>
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
    top: 32px;
    right: 16px;
    z-index: 2;
    border: 0;
    font-size: 32px;
    &:hover,
    &:focus,
    &:active {
        background-color: transparent !important;
        color: #fff !important;
    }
`;

const ReadButton = styled(Button)`
    position: absolute;
    z-index: 2;
    right: 24px;
    bottom: 96px;
    border: none;
    font-size: 1.6rem;
`;