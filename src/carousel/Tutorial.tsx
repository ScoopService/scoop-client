import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import ProfileBanner from '../banners/ProfileBanner';
import DateBanner from '../banners/DateBanner';
import GroupCard from '../components/GroupCard';
import LogoTopBar from '../components/LogoTopBar';
import {HorizontalRule} from '../components/HorizontalRule';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FloatingAction} from 'react-native-floating-action';
import {StackNavigationProp} from '@react-navigation/stack';
import GroupCarousel from './GroupCarousel';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  flex-direction: column;
  background-color: white;
`;

const LogoContainer = styled.View`
  height: 248px;
  width: ${SCREEN_WIDTH}px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  //background-color: pink;
`;

const LogoImg = styled.Image`
  width: 248px;
  height: 243px;
  object-fit: contain;
  margin-left: 8px;
  align-self: center;
`;

const LogoImgSecond = styled.Image`
  width: 223px;
  height: 232px;
  object-fit: contain;
  align-self: center;
`;

const LogoImgThird = styled.Image`
  width: 254px;
  height: 167px;
  object-fit: contain;
  align-self: flex-end;
`;

const LogoImgFourth = styled.Image`
  width: 223px;
  height: 223px;
  object-fit: contain;
  align-self: flex-end;
`;

const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LogoText = styled.Text`
  margin-top: 6px;
  font-size: 20px;
`;

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
  Search: undefined;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const Tutorial = () => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImg source={require('../assets/images/Group5899.png')} />
      </LogoContainer>
      <TextContainer>
        <LogoText>친구가 없어서 운동을 못한다고?</LogoText>
        <LogoText>그런 고민은 이제 그만!</LogoText>
      </TextContainer>
    </Container>
  );
};

export const TutorialSecond = () => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImgSecond source={require('../assets/images/Group5898.png')} />
      </LogoContainer>
      <TextContainer>
        <LogoText>내 주변에 같이 운동하고 싶은</LogoText>
        <LogoText>사람들을 찾아보자</LogoText>
      </TextContainer>
    </Container>
  );
};

export const TutorialThird = () => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImgThird source={require('../assets/images/Group5903.png')} />
      </LogoContainer>
      <TextContainer>
        <LogoText>혼자 운동하는건 이제 안녕!</LogoText>
        <LogoText style={{fontWeight: '600'}}>WORK OUT</LogoText>
      </TextContainer>
    </Container>
  );
};

export const TutorialFourth = () => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <LogoContainer>
        <LogoImgFourth source={require('../assets/images/Ellipse202.png')} />
      </LogoContainer>
      <TextContainer>
        <LogoText></LogoText>
        <LogoText style={{fontWeight: '600'}}>주변에 같이 운동</LogoText>
        <LogoText style={{fontWeight: '600'}}>친구들을 함께 찾아봐요!</LogoText>
        <LogoText style={{fontSize: 16, color: '#808080', marginTop: 20}}>
          같이 운동할 사람들을 찾기위해
        </LogoText>
        <LogoText style={{fontSize: 16, color: '#808080'}}>
          몇가지 동의가 필요합니다!
        </LogoText>
      </TextContainer>
    </Container>
  );
};
