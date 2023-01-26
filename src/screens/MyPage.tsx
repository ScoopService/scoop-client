import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {styles} from '../theme/AppTheme';
import styled from 'styled-components/native';
import ProfileBanner from '../banners/ProfileBanner';
import DateBanner from '../banners/DateBanner';
import GroupCard from '../components/GroupCard';
import LogoTopBar from '../components/LogoTopBar';
import {RatingBox} from '../components/RatingBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HorizontalRule} from '../components/HorizontalRule';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: #d6f0d0;
  background-color: white;
`;

const MyPageTitleView = styled.View`
  background-color: white;
  //background-color: #bce6b1;
  height: 50px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

const MyPageTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const ProfileContainer = styled.View`
  //background-color: #d6f0d0;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: -50px;
`;

const MyProfileBanner = styled.TouchableOpacity`
  //background-color: #bce6b1;
  background-color: white;
  flex-direction: row;
  align-items: center;
  height: 60px;
  margin-top: 9px;
  margin-right: 3px;
`;

const ProfilePic = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: white;
  margin-right: ${SCREEN_WIDTH / 20}px;
`;

const ProfileInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  //background-color: #5DAE48;
  background-color: white;
  height: 60px;
  width: ${SCREEN_WIDTH / 2}px;
  margin-right: ${SCREEN_WIDTH / 8}px;
`;

const NicknameContainer = styled.View`
  //background-color: #7ec76b;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

const StatusMessage = styled.Text`
  //background-color: #d6f0d0;
  color: #808080;
  font-size: 12px;
`;

const NicknameText = styled.Text`
  font-size: 16px;
  margin-right: 5px;
`;

const Nickname = (props: {name: string}) => {
  return <NicknameText>{props.name}</NicknameText>;
};

export const MyPage = () => {
  useEffect(() => {
    //console.log('MyPage.tsx effect');
  }, []);

  return (
    <Container>
      <MyPageTitleView>
        <MyPageTitle>마이페이지</MyPageTitle>
      </MyPageTitleView>
      <ProfileContainer>
        <MyProfileBanner>
          <ProfilePic source={require('../assets/images/Ellipse93.png')} />
          <ProfileInfo>
            <NicknameContainer>
              <Nickname name="블루비" />
              {/*<Text style={{fontSize: 16}}>블루비</Text>*/}
              <RatingBox score={4.7} />
            </NicknameContainer>
            <View>
              <StatusMessage>도전을 좋아하는 사! 나이 입니다.</StatusMessage>
            </View>
          </ProfileInfo>
          <MaterialIcons
            name={'arrow-forward-ios'}
            size={25}
            color={'#C1CCDA'}
          />
        </MyProfileBanner>
      </ProfileContainer>
      <HorizontalRule/>
    </Container>
  );
};
