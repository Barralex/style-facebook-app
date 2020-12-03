import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const Room = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 110px;
  border-color: #82b1ff;
  border-width: 1px;
  border-radius: 20px;
  padding-left: 15px;
  padding: 0 15px;
  margin-right: 12px;
  margin-bottom: 10px;
`;

const RoomText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #1777f2;
  padding-left: 6px;
`;

const User = styled.View`
  margin-right: 13px;
`;

const mockedUsers = [
  { source: require("../assets/user2.jpg"), isActive: true },
  { source: require("../assets/user3.jpg"), isActive: true },
  { source: require("../assets/user4.jpg"), isActive: false },
  { source: require("../assets/user5.jpg"), isActive: false },
  { source: require("../assets/user3.jpg"), isActive: false },
];

const Users = () => {
  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <Room>
          <MaterialCommunityIcons name="video-plus" size={26} color="#E141FC" />
          <RoomText>Create Room</RoomText>
        </Room>

        {mockedUsers.map((user) => {
          const { source, isActive } = user;
          return (
            <User>
              <Avatar source={source} online={isActive} />
            </User>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Users;
