import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextButton from '../components/NextButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'react-native-image-picker';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  flex-direction: column;
  background-color: white;
`;

const ScreenTitleView = styled.View`
  //background-color: white;
  //background-color: #bce6b1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: transparent;
`;

const TitleViewContainer = styled.View`
  //background-color: pink;
  margin-top: 96px;
`;

const TitleView = styled.View`
  //background-color: pink;
  margin-left: 30px;
  margin-top: 4px;
`;

const TitleText = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const TitleDescription = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #808080;
  margin-top: 12px;
`;

const SmallDescription = styled.Text`
  font-size: 12px;
  color: #c5c5c5;
`;

const AddImageContainer = styled.View`
  margin-top: 150px;
  height: 185px;
  justify-content: center;
  align-items: center;
`;

const AddImage = styled.Image`
  height: 185px;
  width: 185px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const SelectedImage = styled.Image`
  height: 122px;
  width: 119px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  border-radius: 500px;
`;

const NextButtonContainer = styled.View`
  position: absolute;
  top: ${SCREEN_HEIGHT/1.25}px;
  width: ${SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
  height: 100px;
  //background-color: black;
`;

type RootStackParamList = {
  SignUp: undefined; // undefined because you aren't passing any params to the home screen
  SignUpDetailsKeyword: undefined;
  HomeBottomTabs: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsDone = ({navigation}: Props) => {
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <AddImageContainer>
        <Pressable onPress={() => {}}>
          <AddImage source={require('../assets/images/Group5901.png')} />
        </Pressable>
      </AddImageContainer>

      <TitleViewContainer>
        <TitleView style={{flexDirection: 'row'}}>
          <TitleText style={{color: '#39CB51'}}>축하합니다! </TitleText>
          <TitleText>활동명 님 </TitleText>
        </TitleView>
        <TitleView style={{flexDirection: 'row'}}>
          <TitleText>모든 준비가 완료되었습니다! </TitleText>
        </TitleView>
        <TitleView>
          <TitleDescription>
            이제 같이 운동할 친구들을 찾아볼까요?
          </TitleDescription>
        </TitleView>
      </TitleViewContainer>

      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeBottomTabs');
          }}>
          <NextButton text={'찾으러 가기'} isOn={true} />
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
