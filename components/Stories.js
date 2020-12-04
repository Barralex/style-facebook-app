import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";
import Story from "./Story";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 192px;
  padding-left: 10px;
`;

const mockStories = [
  {
    storyId: 1,
    storyFirstImage: require("../assets/story1.jpg"),
    iconSource: <AntDesign name="plus" size={24} color="#1777f2" />,
    storyText: "Add To Story",
  },
  {
    storyId: 2,
    storyFirstImage: require("../assets/story2.jpg"),
    iconSource: <Avatar source={require("../assets/user2.jpg")} story={true} />,
    storyText: "Johnny Sins",
  },
  {
    storyId: 3,
    storyFirstImage: require("../assets/story3.jpg"),
    iconSource: <Avatar source={require("../assets/user3.jpg")} story={true} />,
    storyText: "Lana Rhoades",
  },
  {
    storyId: 4,
    storyFirstImage: require("../assets/story4.jpg"),
    iconSource: <Avatar source={require("../assets/user4.jpg")} story={true} />,
    storyText: "Elsa Jean",
  },
];

const Stories = () => {
  return (
    <Container>
      <ScrollView horizontal styled={{ paddingLeft: 11 }}>
        {mockStories.map((story) => {
          const { storyId, storyFirstImage, iconSource, storyText } = story;

          return (
            <Story
              key={storyId}
              source={storyFirstImage}
              storyIcon={iconSource}
              storyText={storyText}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Stories;
