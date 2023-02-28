import Post from "../components/post/Post";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./dumyData";
import styled from "styled-components";

const Feed = () => {
  const renderPosts = () => {
    return data.map((post, index) => (
      <SwiperSlide key={index}>
        <Post post={post} />
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      direction="vertical"
      style={{height: "100vh"}}
      mousewheel={true}
    >
      {renderPosts()}
      <SwiperSlide>
        <FeedEnd>End of feed, Click to go back to top</FeedEnd>
      </SwiperSlide>
    </Swiper>
  );
};

export default Feed;

const FeedEnd = styled.div`
    height: 10vh;
`;
