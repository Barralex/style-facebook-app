import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  width: 40px;
  height: 40px;
`;

const User = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #1777f2;
  border-width: ${(props) => (props.story ? "3px" : 0)};
`;

const UserActive = styled.View`
  width: 15px;
  height: 15px;
  background: #4bcb1f;
  border-radius: 8px;
  position: absolute;
  border-width: 2px;
  border-color: #fff;
  bottom: -2px;
  right: -2px;
`;

const Avatar = ({ source, online, story }) => {
  return (
    <Container>
      <TouchableOpacity>
        <User source={source} story={story} />
        {online && <UserActive />}
      </TouchableOpacity>
    </Container>
  );
};

export default Avatar;
