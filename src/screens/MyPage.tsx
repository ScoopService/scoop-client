import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {styles} from '../theme/AppTheme';
import styled from 'styled-components/native';
import ProfileBanner from '../components/ProfileBanner';
import DateBanner from '../components/DateBanner';
import GroupCard from '../components/GroupCard';
import LogoTopBar from '../components/LogoTopBar';

const Container = styled.View`
  flex: 1;
  background-color: #d6f0d0;
  //background-color: white;
  align-items: center;
`;

const MyPageTitle = styled.Text`
  background-color: #bce6b1;
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const MyProfileBanner = styled.View`
  
`;

const ProfilePic = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  margin-left: 25px;
`;

export const MyPage = () => {
  useEffect(() => {
    //console.log('MyPage.tsx effect');
  }, []);

  return (
    <Container>
      <MyPageTitle>마이페이지</MyPageTitle>
      <MyProfileBanner>
        <ProfilePic source={require('../assets/images/Ellipse93.png')} />
      </MyProfileBanner>
    </Container>
  );
};
