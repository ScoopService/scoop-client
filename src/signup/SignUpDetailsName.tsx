import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
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

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: transparent;
`;

const TitleView = styled.View`
  height: 40px;
  //background-color: pink;
  margin-left: 30px;
  margin-top: 21px;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;

const TextInputContainer = styled.View`
  width: 330px;
  height: 50px;
  border-bottom: #d9d9d9;
  border-bottom-width: 0.5px;
  flex-direction: row;
  align-items: center;
`;
const CustomTextInput = styled.TextInput`
  font-size: 19px;
  width: 95%;
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
  MyPage: undefined; // undefined because you aren't passing any params to the home screen
  SignUpDetailsAgreement: undefined;
  SignUpDetailsNickname: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsName = ({navigation}: Props) => {
  const [name, setName] = useState('');

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
        <View style={{marginRight: 33}}>
          <ResetButton></ResetButton>
        </View>
      </ScreenTitleView>

      <TitleView>
        <TitleText>이름을 입력해주세요</TitleText>
      </TitleView>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <TextInputContainer>
          <CustomTextInput
            placeholderTextColor={'#d9d9d9'}
            placeholder={'이름'}
            maxLength={16}
            onChangeText={text => setName(text)}></CustomTextInput>
          <Ionicons
            name={'close-circle-sharp'}
            style={{color: '#C5C5C5'}}
            size={22}
          />
        </TextInputContainer>
      </View>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsNickname');
          }}>
          {name ? (
            <NextButton text={'다음으로 넘어가기'} isOn={true} />
          ) : (
            <NextButton text={'다음으로 넘어가기'} isOn={false} />
          )}
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
