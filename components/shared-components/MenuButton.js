import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const Button = styled.TouchableOpacity`
  height: 100%;
  width: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MenuText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  padding-left: 11px;
`;

const MenuButton = ({ menuText, icon }) => {
  return (
    <Container>
      <Button>
        {icon !== undefined && icon}
        <MenuText>{menuText}</MenuText>
      </Button>
    </Container>
  );
};

export default MenuButton;
