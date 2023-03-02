import { Container } from "react-bootstrap";
import styled from "styled-components";
import SlideNavigator from "./SlideNavigator";
import ThemeChoser from "./ThemeChoser";
import Writer from "./Writer";

const Write = () => {
  return (
    <WriteWrapper>
      <PageHeading>Write a story</PageHeading>
      <SlideNavigator />
      <ThemeChoser />
      <Writer />
    </WriteWrapper>
  );
};

export default Write;

const PageHeading = styled.h1`
  padding-top: 40px;
  text-align: center;
`;

const WriteWrapper = styled.div`
  background-color: green;
  padding: 24px;
`;

