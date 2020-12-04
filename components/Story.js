import React from "react";
import styled from "styled-components";

const Card = styled.TouchableOpacity`
  height: 170px;
  width: 106px;
  margin-right: 8px;
  position: relative;
`;

const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;

const CardUser = styled.View`
  position: absolute;
  background-color: #fff;
  height: 39px;
  width: 39px;
  border-radius: 20px;
  top: 8px;
  left: 8px;
  justify-content: center;
  align-items: center;
`;

const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;

const CardUserName = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;

const Story = ({ source, storyIcon, storyText }) => {
  return (
    <Card>
      <CardStory source={source} />
      <CardUser>{storyIcon !== undefined && storyIcon}</CardUser>
      <CardFooter>
        <CardUserName>{storyText}</CardUserName>
      </CardFooter>
    </Card>
  );
};

export default Story;
