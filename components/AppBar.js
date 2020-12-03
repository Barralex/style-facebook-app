import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: #3b5998;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  background: #eeeeee;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

const AppBar = () => {
  return (
    <Container>
      <Text>facebook</Text>
      <Row>
        <Button>
          <Feather name="search" size={29} color="black" />
        </Button>
        <Button>
          <MaterialCommunityIcons name="facebook-messenger" size={29} />
        </Button>
      </Row>
    </Container>
  );
};

export default AppBar;
