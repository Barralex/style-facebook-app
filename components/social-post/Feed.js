import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Avatar from "../Avatar";
import SectionSeparator from "../shared-components/SectionSeparator";

const Container = styled.View`
  flex: 1;
`;

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

const Row = styled.View`
  flex-direction: row;
  align-items: center;
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

const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
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

const Feed = () => {
  return (
    <Container>
      <Header>
        <Row>
          <Avatar source={require("../../assets/user1.jpg")} />

          <View style={{ paddingLeft: 10 }}>
            <UserName>Regi P</UserName>
            <Row>
              <TimeSpan>9m</TimeSpan>
              <Entypo name="dot-single" size={12} color="#747476" />
              <Entypo name="globe" size={12} color="#747476" />
            </Row>
          </View>
        </Row>
        <Entypo name="dots-three-horizontal" size={15} color="#222121" />
      </Header>
      <Post>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
      </Post>

      <Photo source={require("../../assets/post1.jpg")} />

      <Footer>
        <FooterCount>
          <Row>
            <LikeIcon>
              <AntDesign name="like1" size={12} color="#FFF" />
            </LikeIcon>
            <TextCount>123 likes</TextCount>
          </Row>

          <TextCount>12 comments</TextCount>
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
      <SectionSeparator />
    </Container>
  );
};

export default Feed;
