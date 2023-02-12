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
  CreateMeetingType: undefined;
  CreateMeetingDescription: undefined;
};

//TODO: SignupxAgreement 확인하기

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const CreateMeetingKeyword = ({navigation}: Props) => {
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

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 335, height: 37, resizeMode: 'contain'}}
          source={require('../assets/images/progressBar/Variant4.png')}
        />
      </View>
      <TitleView>
        <TitleDescription>모임 개설하기</TitleDescription>
        <TitleText>모임의 키워드를 정해주세요!</TitleText>
      </TitleView>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <View style={{justifyContent: 'flex-start', width: 335}}>
          <Text style={{fontWeight: '700', fontSize: 18}}>모임 분위기</Text>
        </View>
        <View style={{justifyContent: 'flex-start', width: 330, marginTop: 5}}>
          <SmallDescription>
            간단한 키워드로 모임의 분위기를 표현할 수 있어요!
          </SmallDescription>
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 12}}>
          <FilterButton name={'외향적'} />
          <FilterButton name={'내향적'} />
          <FilterButton name={'즉흥적'} />
          <FilterButton name={'계획적'} />
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 7}}>
          <FilterButton name={'열정적'} />
          <FilterButton name={'용병'} />
          <FilterButton name={'분위기 메이커'} />
          <FilterButton name={'이타적인'} />
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 7}}>
          <FilterButton name={'스트라이커'} />
          <FilterButton name={'패스왕'} />
          <FilterButton name={'강철체력'} />
          <FilterButton name={'공격적'} />
        </View>

        <View style={{justifyContent: 'flex-start', width: 335, marginTop: 33}}>
          <Text style={{fontWeight: '700', fontSize: 18}}>
            이런 사람이 필요해요
          </Text>
        </View>
        <View style={{justifyContent: 'flex-start', width: 330, marginTop: 5}}>
          <SmallDescription>
            모임에 필요한 사람을 키워드로 알려줘요!
          </SmallDescription>
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 12}}>
          <FilterButton name={'외향적'} />
          <FilterButton name={'내향적'} />
          <FilterButton name={'즉흥적'} />
          <FilterButton name={'계획적'} />
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 7}}>
          <FilterButton name={'열정적'} />
          <FilterButton name={'용병'} />
          <FilterButton name={'분위기 메이커'} />
          <FilterButton name={'이타적인'} />
        </View>
        <View style={{flexDirection: 'row', width: 335, marginTop: 7}}>
          <FilterButton name={'스트라이커'} />
          <FilterButton name={'패스왕'} />
          <FilterButton name={'강철체력'} />
          <FilterButton name={'공격적'} />
        </View>
      </View>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('CreateMeetingDescription');
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
