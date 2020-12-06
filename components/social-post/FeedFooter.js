import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const LikeIcon = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f9f9f9;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const FeedFooter = ({ totalLikes, totalComments }) => {
  return (
    <Footer>
      <FooterCount>
        <Row>
          <LikeIcon>
            <AntDesign name="like1" size={12} color="#FFF" />
          </LikeIcon>
          <TextCount>{totalLikes} likes</TextCount>
        </Row>

        <TextCount>{totalComments} comments</TextCount>
      </FooterCount>

      <Separator />

      <FooterMenu>
        <Button>
          <Icon>
            <AntDesign name="like2" size={20} color="#424040" />
          </Icon>
          <Text>Like</Text>
        </Button>

        <Button>
          <Icon>
            <MaterialCommunityIcons
              name="comment-outline"
              size={20}
              color="#424040"
            />
          </Icon>
          <Text>Comment</Text>
        </Button>

        <Button>
          <Icon>
            <MaterialCommunityIcons
              name="share-outline"
              size={20}
              color="#424040"
            />
          </Icon>
          <Text>Share</Text>
        </Button>
      </FooterMenu>
    </Footer>
  );
};

export default FeedFooter;
