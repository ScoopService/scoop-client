import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RatingBox} from '../components/RatingBox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HorizontalRule} from '../components/HorizontalRule';
import {RouteLabel} from '../components/RouteLabel';
import ActionButton from 'react-native-action-button';
import NextButton from '../components/NextButton';
import EditButton from '../components/EditButton';
import FilterButton from '../components/FilterButton';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
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

const EditButtonContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-bottom: -50px;
  //background-color: black;
`;

const SmallTitle = styled.Text`
  margin-left: 22px;
  margin-top: 20px;
  font-size: 13px;
  color: #808080;
`;

const LocationText = styled.Text`
  font-size: 16px;
  margin-left: 22px;
  margin-top: 12px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: ${SCREEN_WIDTH}px;
  height: 34px;
  margin-top: 12px;
  margin-left: 20px;
  //background-color: #bce6b1;
`;

type RootStackParamList = {
  MyPage: undefined; // undefined because you aren't passing any params to the home screen
  ProfileSettings: undefined;
  ManageGroups: undefined;
  MyActiveGroups: undefined;
  LikedGroups: undefined;
  History: undefined;
};

type MyPageNavigationProp = StackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: MyPageNavigationProp;
};

const Nickname = (props: {name: string}) => {
  return <NicknameText>{props.name}</NicknameText>;
};

export const ProfileSettings = ({navigation}: Props) => {
  useEffect(() => {
    //console.log('Notification.tsx effect');
  }, []);

  return (
    <Container>
      <MyPageTitleView>
        <MyPageTitle>마이페이지</MyPageTitle>
      </MyPageTitleView>
      <ProfileContainer>
        <MyProfileBanner
          onPress={() => {
            navigation.navigate('ProfileSettings');
          }}>
          <ProfilePic source={require('../assets/images/Ellipse93.png')} />
          <ProfileInfo>
            <NicknameContainer>
              <Nickname name="블루비" />
              {/*<Text style={{fontSize: 16}}>블루비</Text>*/}
              <RatingBox score={4.7} />
            </NicknameContainer>
            <View>
              <StatusMessage>히히</StatusMessage>
            </View>
          </ProfileInfo>
          <MaterialIcons
            name={'arrow-forward-ios'}
            size={25}
            color={'#C1CCDA'}
          />
        </MyProfileBanner>
      </ProfileContainer>

      <EditButtonContainer>
        <Pressable
          onPress={() => {
            // navigation.navigate('Meeting');
            // navigation.navigate('MyPage');
          }}>
          <EditButton text={'프로필 수정'} />
        </Pressable>
      </EditButtonContainer>
      <HorizontalRule />

      <SmallTitle>활동 지역</SmallTitle>
      <LocationText>서울시 광진구 화양동</LocationText>
      {/* TODO: fetch */}
      <View style={{height: 28}} />
      <SmallTitle>나의 키워드</SmallTitle>
      <FilterContainer>
        <FilterButton name={'스트라이커'} />
        <FilterButton name={'외향적'} />
        <FilterButton name={'강철체력'} />
        <FilterButton name={'패스왕'} />
      </FilterContainer>

      <View style={{height: 28}} />
      <SmallTitle>관심 종목</SmallTitle>
      

    </Container>
  );
};
