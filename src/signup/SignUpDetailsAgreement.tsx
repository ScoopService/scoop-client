import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Tutorial} from '../carousel/Tutorial';
import WelcomeCarousel from '../carousel/WelcomeCarousel';
import {NavigationActions} from 'react-navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextButton from '../components/NextButton';
import {HorizontalRule} from '../components/HorizontalRule';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

const ScreenTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: transparent;
`;

const ButtonWrapper = styled.View`
  align-items: center;
  margin-top: 40px;
  margin-bottom: -25px;
`;

const ButtonContainer = styled.View`
  //background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  width: 330px;
  height: 66px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  margin: 9px 13px;
`;

const Wrapper = styled.View`
  //background-color: #39cb51;
  background-color: white;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  width: ${SCREEN_WIDTH}px;
  height: 50px;
  border-bottom: white;
  //border-bottom-width: 3px;
`;

const LabelText = styled.Text`
  color: black;
  font-weight: 500;
  font-size: 16px;
  margin-left: 15px;
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
  UserAgreement: undefined;
  SignUpDetailsName: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsAgreement = ({navigation}: Props) => {
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      <ScreenTitleView>
        <TouchableOpacity
          style={{marginLeft: 17}}
          onPress={() => {
            navigation.pop();
          }}>
          <MaterialIcons
            name={'arrow-back-ios'}
            size={26}
            color={'black'}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <ScreenTitle>약관동의</ScreenTitle>
        <View style={{marginRight: 33}}>
          <ResetButton>초기화</ResetButton>
        </View>
      </ScreenTitleView>

      <ButtonWrapper>
        <Pressable
          onPress={() => {
            setIsOn(!isOn);
          }}>
          <ButtonContainer
            style={
              isOn ? {backgroundColor: '#e9e9e9'} : {backgroundColor: '#39cb51'}
            }>
            <Ionicons
              name={'checkmark-circle'}
              size={30}
              style={
                isOn
                  ? {color: '#C5C5C5', marginLeft: 30}
                  : {color: 'white', marginLeft: 30}
              }
            />
            <ButtonText style={isOn ? {color: 'white'} : {color: 'white'}}>
              약관 전체 동의
            </ButtonText>
          </ButtonContainer>
        </Pressable>
      </ButtonWrapper>

      <HorizontalRule />

      <View style={{height: 20}} />
      <Wrapper>
        <Ionicons
          name={'checkmark-circle'}
          size={30}
          style={
            isOn
              ? {color: '#C5C5C5', marginLeft: 30}
              : {color: 'green', marginLeft: 30}
          }
        />
        <LabelText style={isOn ? {color: '#C5C5C5'} : {color: 'black'}}>
          [필수] 휴대폰 본인확인 이용 동의
        </LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginLeft: 52}}
          size={15}
          color={'black'}
        />
      </Wrapper>
      <Wrapper>
        <Ionicons
          name={'checkmark-circle'}
          size={30}
          style={
            isOn
              ? {color: '#C5C5C5', marginLeft: 30}
              : {color: 'green', marginLeft: 30}
          }
        />
        <LabelText style={isOn ? {color: '#C5C5C5'} : {color: 'black'}}>
          [필수] 고유식별정보 처리 동의
        </LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginLeft: 70}}
          size={15}
          color={'black'}
        />
      </Wrapper>
      <Wrapper>
        <Ionicons
          name={'checkmark-circle'}
          size={30}
          style={
            isOn
              ? {color: '#C5C5C5', marginLeft: 30}
              : {color: 'green', marginLeft: 30}
          }
        />
        <LabelText style={isOn ? {color: '#C5C5C5'} : {color: 'black'}}>
          [필수] 통신사 이용약관 동의
        </LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginLeft: 86}}
          size={15}
          color={'black'}
        />
      </Wrapper>
      <Wrapper>
        <Ionicons
          name={'checkmark-circle'}
          size={30}
          style={
            isOn
              ? {color: '#C5C5C5', marginLeft: 30}
              : {color: 'green', marginLeft: 30}
          }
        />
        <LabelText style={isOn ? {color: '#C5C5C5'} : {color: 'black'}}>
          [필수] 개인 위치 정보 처리 동의
        </LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginLeft: 64}}
          size={15}
          color={'black'}
        />
      </Wrapper>
      <Wrapper>
        <Ionicons
          name={'checkmark-circle'}
          size={30}
          style={
            isOn
              ? {color: '#C5C5C5', marginLeft: 30}
              : {color: 'green', marginLeft: 30}
          }
        />
        <LabelText style={isOn ? {color: '#C5C5C5'} : {color: 'black'}}>
          [필수] 개인정보 수집 및 이용 동의
        </LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginLeft: 50}}
          size={15}
          color={'black'}
        />
      </Wrapper>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsName');
          }}>
          {isOn ? (
            <NextButton text={'확인했어요'} isOn={false} />
          ) : (
            <NextButton text={'확인했어요!'} isOn={true} />
          )}
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
