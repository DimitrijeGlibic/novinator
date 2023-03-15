import Post from "./post/Post";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./dumyData";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const TimeLine = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const renderPosts = () => {
    return [...data].reverse().map((post, index) => ( // aray reverse da bi najstariji post imao index 1
      <SwiperSlide key={index} url={index}>
        <Post post={post} />
      </SwiperSlide>
    ));
  };

  const convertIdToIndex = () => {
    return data.length - postId;
  }

  const handleSwipeChange = ({ activeIndex, previousIndex }) => {
    if (activeIndex == convertIdToIndex()) { // Edge case for initial slide
      return;
    }

    navigate(`/${+postId + previousIndex - activeIndex}`)
  };

  return (
    <FeedContainer>
      <StyledSwiper
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        mousewheel={true}
        initialSlide={convertIdToIndex()}
        onSlideChange={handleSwipeChange}
      >
        {renderPosts()}

        <SwiperSlide>
          <FeedEnd>End of feed, Click to go back to top</FeedEnd>
        </SwiperSlide>
      </StyledSwiper>
    </FeedContainer>
  );
};

export default TimeLine;

const FeedEnd = styled.div`
  height: 10vh;
`;

const FeedContainer = styled(Container)`
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
