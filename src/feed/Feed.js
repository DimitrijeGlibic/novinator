import Post from "../components/post/Post";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./dumyData";
import styled from "styled-components";
import MenuSideDrawer from "../components/menu/MenuSideDrawer";
import { Container } from "react-bootstrap";

const Feed = () => {
  const renderPosts = () => {
    return data.map((post, index) => (
      <SwiperSlide key={index}>
        <Post post={post} />
      </SwiperSlide>
    ));
  };

  return (
    <FeedContainer>
      <MenuSideDrawer />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        style={{ height: "100vh" }}
        mousewheel={true}
      >
        {renderPosts()}
        <SwiperSlide>
          <FeedEnd>End of feed, Click to go back to top</FeedEnd>
        </SwiperSlide>
      </Swiper>
    </FeedContainer>
  );
};

export default Feed;

const FeedEnd = styled.div`
  height: 10vh;
`;

const FeedContainer = styled(Container)`
  @media (max-width: 576px) {
    padding: 0;
  }
`;
