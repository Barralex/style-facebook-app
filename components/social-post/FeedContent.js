import React from "react";
import styled from "styled-components";

const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const FeedContent = ({ postMessage, postPhotoSource }) => {
  return (
    <>
      <Post>{postMessage}</Post>
      <Photo source={postPhotoSource} />
    </>
  );
};

export default FeedContent;
