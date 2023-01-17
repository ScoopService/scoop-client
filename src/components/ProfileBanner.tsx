import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: white;
  margin-left: 25px;
`;

const Wrapper = styled.View`
  //background-color: white;
  background-color: #39CB51;
  flex-direction: row;
  align-items: center;
  height: ${SCREEN_HEIGHT/9}px;
  margin-bottom: -10px;
`;

const GreetingsContainer = styled.View`
  //background-color: #5DAE48;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  margin-left: 12px;
`;

const GreetingsName = styled.Text`
  color: white;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
`;

const GreetingsText = styled.Text`
  color: white;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  margin-top: 3px;
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
