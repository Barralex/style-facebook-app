import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Avatar from "./../Avatar";

const Header = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  padding-left: 5px;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 6px;
  padding: 0 11px;
`;

const UserName = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

const TimeSpan = styled.Text`
  font-size: 9px;
  color: #747476;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FeedHeader = ({ userAvatar, userName, timespan }) => {
  return (
    <Header>
      <Row>
        <Avatar source={userAvatar} />
        <View style={{ paddingLeft: 10 }}>
          <UserName>{userName}</UserName>
          <Row>
            <TimeSpan>{timespan}</TimeSpan>
            <Entypo name="dot-single" size={12} color="#747476" />
            <Entypo name="globe" size={12} color="#747476" />
          </Row>
        </View>
      </Row>
      <Entypo name="dots-three-horizontal" size={15} color="#222121" />
    </Header>
  );
};

export default FeedHeader;
