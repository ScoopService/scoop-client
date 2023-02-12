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
import FilterButton from '../components/FilterButton';

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
  margin-top: 40px;
`;

const TitleText = styled.Text`
  font-size: 23px;
  font-weight: 600;
  margin-top: 4px;
`;

const TitleDescription = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #808080;
`;

const TextInputContainer = styled.View`
  width: 330px;
  height: 50px;
  border-bottom: #d9d9d9;
  border-bottom-width: 0.5px;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;
const CustomTextInput = styled.TextInput`
  font-size: 19px;
  width: 95%;
  margin-top: 10px;
  height: 50px;
`;

const SmallDescription = styled.Text`
  font-size: 12px;
  color: #c5c5c5;
`;

const NextButtonContainer = styled.View`
  position: absolute;
  top: ${SCREEN_HEIGHT / 1.25}px;
  width: ${SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
  height: 100px;
  //background-color: black;
`;

type RootStackParamList = {
  Home: undefined;
  CreateMeetingCount: undefined;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const CreateMeetingName = ({navigation}: Props) => {
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

      <View
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 335, height: 37, resizeMode: 'contain'}}
          source={require('../assets/images/progressBar/Variant1.png')}
        />
      </View>
      <TitleView>
        <TitleDescription>모임 개설하기</TitleDescription>
        <TitleText>모임 이름과 운동종목을 정해봐요!</TitleText>
      </TitleView>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <View style={{justifyContent: 'flex-start', width: 335, }}>
          <Text style={{fontWeight: '700', fontSize: 18}}>모임 이름</Text>
        </View>
        <TextInputContainer>
          <CustomTextInput
            placeholderTextColor={'#d9d9d9'}
            placeholder={'이름'}
            maxLength={16}
            onChangeText={text => setName(text)}></CustomTextInput>
          <Ionicons
            name={'close-circle-sharp'}
            style={{color: '#C5C5C5', marginTop: 10}}
            size={22}
          />
          {/* TODO: onPress -> Text 지우기*/}
        </TextInputContainer>
        <View style={{justifyContent: 'flex-start', width: 330, marginTop: 10}}>
          <SmallDescription>
            비속어, 특수문자는 사용할 수 없어요
          </SmallDescription>
        </View>

        <View style={{justifyContent: 'flex-start', width: 335, marginTop: 33}}>
          <Text style={{fontWeight: '700', fontSize: 18}}>운동 종목</Text>
        </View>
        <View style={{flexDirection: 'row', width:335, marginTop:17}}>
          <FilterButton name={'풋살'} />
          <FilterButton name={'농구'} />
          <FilterButton name={'러닝'} />
          <FilterButton name={'배드민턴'} />
          <FilterButton name={'볼링'} />
        </View>
      </View>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('CreateMeetingCount');
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
