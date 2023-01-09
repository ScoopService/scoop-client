import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background-color: white;
  margin-left: 25px;
`;

const Wrapper = styled.View`
  background-color: white;
  //background-color: #104B00;
  flex-direction: row;
  align-items: center;
  height: 18%;
  margin-bottom: -10px;
`;

const GreetingsContainer = styled.View`
  background-color: white;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  margin-left: 12px;
`;

const GreetingsName = styled.Text`
  color: black;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
`;

const GreetingsText = styled.Text`
  color: black;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
`;

//TODO : 폰트 설정하기

interface Props {
  nickname: string;
}

const ProfileBanner = ({nickname}: Props) => {
  return (
    <Wrapper>
      <ProfileImage source={require('../assets/images/Ellipse93.png')} />
      <GreetingsContainer>
        <GreetingsName>{nickname}님</GreetingsName>
        <GreetingsText>오늘 운동도 함께 즐겨요!</GreetingsText>
      </GreetingsContainer>
    </Wrapper>
  );
};

export default ProfileBanner;
