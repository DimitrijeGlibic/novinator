import Post from "./post/Post";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { data } from "./dumyData";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const TimeLine = () => {
  const { postId } = useParams();
  const swiper = useSwiper();
  console.log(swiper, 'swajper');

  const renderPosts = () => {
    data.reverse();
    return data.map((post, index) => ( // aray reverse da bi najstariji post imao index 1
      <SwiperSlide key={index} url={index}>
        <Post post={post} />
      </SwiperSlide>
    ));
  };

  return (
    <FeedContainer>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        style={{ height: "100vh" }}
        mousewheel={true}
        initialSlide={postId}
      >
        {renderPosts()}
        <SwiperSlide>
          <FeedEnd>End of feed, Click to go back to top</FeedEnd>
        </SwiperSlide>
      </Swiper>
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
