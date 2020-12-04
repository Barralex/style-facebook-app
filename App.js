import React from "react";
import { ScrollView, StatusBar } from "react-native";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import Feed from "./components/social-post/Feed";
import Stories from "./components/Stories";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Stories />
          <Feed />
        </ScrollView>
      </Container>
    </>
  );
}
