import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import MenuButton from "./shared-components/MenuButton";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background-color: #fff;
  width: 100%;
  align-items: center;
  padding: 0 11px;
`;

const Input = styled.TextInput`
  width: 100%;
  border-radius: 20px;
  padding: 0 8px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
  margin-top: 5px;
`;

const Separator = styled.View`
  width: 1px;
  height: 32px;
  background-color: #f0f0f0;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background-color: #f0f2f5;
`;

const ToolBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Avatar source={require("../assets/user1.jpg")} />
          <Input placeholder="What's on your mind?"></Input>
        </Row>

        <Divider />

        <Row>
          <MenuButton
            menuText="Live"
            icon={<Ionicons name="ios-videocam" size={22} color="#F44337" />}
          />

          <Separator />

          <MenuButton
            menuText="Photo"
            icon={
              <MaterialIcons
                name="photo-size-select-actual"
                size={20}
                color="#4CAF50"
              />
            }
          />

          <Separator />

          <MenuButton
            menuText="Room"
            icon={
              <MaterialCommunityIcons
                name="video-plus"
                size={22}
                color="#E141FC"
              />
            }
          />
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
