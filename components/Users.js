import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Avatar from "./Avatar";
import SectionSeparator from "./shared-components/SectionSeparator";

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
  { source: require("../assets/user2.jpg"), isActive: true, id: 1 },
  { source: require("../assets/user3.jpg"), isActive: true, id: 2 },
  { source: require("../assets/user4.jpg"), isActive: false, id: 3 },
  { source: require("../assets/user5.jpg"), isActive: false, id: 4 },
  { source: require("../assets/user3.jpg"), isActive: false, id: 5 },
];

const Users = () => {
  return (
    <>
      <Container>
        <ScrollView horizontal>
          <Room>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#E141FC"
            />
            <RoomText>Create Room</RoomText>
          </Room>

          {mockedUsers.map((user) => {
            const { source, isActive, key } = user;
            return (
              <User key={key}>
                <Avatar source={source} online={isActive} />
              </User>
            );
          })}
        </ScrollView>
      </Container>
      <SectionSeparator />
    </>
  );
};

export default Users;
