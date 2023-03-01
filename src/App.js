import Container from "react-bootstrap/Container";
import Feed from "./feed/Feed";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import { Fragment } from "react";
import styled from "styled-components";
import MenuSideDrawer from "./components/menu/MenuSideDrawer";
function App() {
  return (
    <Fragment>
      <FeedContainer>
        <MenuSideDrawer />
        <Feed />
      </FeedContainer>
    </Fragment>
  );
}

export default App;

const FeedContainer = styled(Container)`
  @media (max-width: 576px) {
    padding: 0;
  }
`;
