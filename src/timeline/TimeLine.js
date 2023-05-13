import Post from "./post/Post";
import { SwiperSlide } from "swiper/react";
import { data } from "./dumyData";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import VerticalSwiper from "../components/swipers/VerticalSwiper";

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
      <VerticalSwiper
        initialSlide={convertIdToIndex()}
        onSlideChange={handleSwipeChange}
      >
        {renderPosts()}

        <SwiperSlide>
          <FeedEnd>End of feed, Click to go back to top</FeedEnd>
        </SwiperSlide>
      </VerticalSwiper>
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
