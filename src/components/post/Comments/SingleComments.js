import { useState } from "react";
import styled from "styled-components";

const SingleComment = () => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const handleShowMoreClick = () => {
    setIsShowingMore((oldValue) => !oldValue);
  };

  return (
    <CommentWrapper>
      <UserPhoto src="./black.webp"></UserPhoto>
      <div>
        <UserInfo>Dimitrije Glibic</UserInfo>
        <CommentContent $isShowingMore={isShowingMore}>
          Prvi komentarPrvi komentarPrvi komentarPrvi komentarPrvi komentarPrvi
          komentarPrvi komentar
        </CommentContent>
        <ExpandButton onClick={handleShowMoreClick}>
          {isShowingMore ? "Show less" : "Show more"}
        </ExpandButton>
      </div>
    </CommentWrapper>
  );
};

export default SingleComment;

const CommentWrapper = styled.div`
  display: flex;
`;

const UserPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

const UserInfo = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div`
  overflow: hidden;
  line-height: 20px;
  max-height: 40px;
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-line-clamp: 2;
  ${({ $isShowingMore }) => $isShowingMore && `max-height: unset;`}
`;

const ExpandButton = styled.button`
    border: 0;
    background-color: transparent;
    padding-left: 0;
    color: blue;
`;