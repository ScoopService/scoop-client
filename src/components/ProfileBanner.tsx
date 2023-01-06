import React from 'react';
import styled from 'styled-components/native';
import {Image, ScrollView, Text, View} from 'react-native';

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: white;
  margin-left: 30px;
`;

const Wrapper = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  height: 180px;
`;

const Greetings = styled.View`
  background-color: white;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  margin-left: 30px;
`;

interface Props {
  nickname: string;
}

const ProfileBanner = ({nickname}: Props) => {
  return (
    <Wrapper>
      <ProfileImage source={require('../assets/images/Ellipse93.png')} />
      <Greetings>
        <Text>{nickname}님</Text>
        <Text>오늘 운동도 함께 즐겨요!</Text>
      </Greetings>
    </Wrapper>
  );
};

export default ProfileBanner;
