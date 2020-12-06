import React from "react";
import styled from "styled-components";
import SectionSeparator from "../shared-components/SectionSeparator";
import FeedContent from "./FeedContent";
import FeedFooter from "./FeedFooter";
import FeedHeader from "./FeedHeader";

const Container = styled.View`
  flex: 1;
`;

const mockData = [
  {
    id: 1,
    userAvatar: require("../../assets/user1.jpg"),
    userName: "Lana Rhoades",
    timespan: "9m",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat nisl in aliquet venenatis. Sed scelerisque dui id feugiat pellentesque. Fusce porta ex tempus mi fermentum gravida",
    postImage: require("../../assets/post1.jpg"),
    totalLikes: 122,
    totalComments: 7,
  },
  {
    id: 2,
    userAvatar: require("../../assets/user2.jpg"),
    userName: "Elsa Jean",
    timespan: "1d",
    postText:
      "Cras vulputate vehicula vehicula. Mauris pulvinar interdum enim vitae porttitor. Sed nulla mauris, consequat laoreet fermentum quis, iaculis eget nunc. Pellentesque justo urna, pretium a orci vitae, consequat finibus metus. Fusce efficitur ullamcorper sapien, vitae placerat est tincidunt in. Aliquam ligula mi, feugiat sed nisi nec, consectetur placerat sem",
    postImage: require("../../assets/post2.jpg"),
    totalLikes: 122,
    totalComments: 7,
  },
  {
    id: 3,
    userAvatar: require("../../assets/user3.jpg"),
    userName: "Johnny Sins",
    timespan: "19h",
    postText: "Pellentesque imperdiet enim vel turpis ullamcorper porttitor.",
    postImage: require("../../assets/post1.jpg"),
    totalLikes: 122,
    totalComments: 7,
  },
];

const Feed = () => {
  return mockData.map((post) => {
    const {
      id,
      userAvatar,
      userName,
      timespan,
      postText,
      postImage,
      totalLikes,
      totalComments,
    } = post;

    return (
      <Container key={id}>
        <FeedHeader
          userAvatar={userAvatar}
          userName={userName}
          timespan={timespan}
        />
        <FeedContent postMessage={postText} postPhotoSource={postImage} />
        <FeedFooter totalLikes={totalLikes} totalComments={totalComments} />
        <SectionSeparator />
      </Container>
    );
  });
};

export default Feed;
