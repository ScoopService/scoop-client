import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
  margin-top: 21px;
  flex-direction: row;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: 600;
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

const SmallDescription = styled.Text`
  font-size: 14px;
  color: #808080;
`;

const SportsContainer = styled.Pressable`
  width: ${SCREEN_WIDTH}px;
  height: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const SportsImage = styled.Image`
  width: 335px;
  height: 150px;
  object-fit: contain;
`;

const FilterWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH}px;
  margin-bottom: 10px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 335px;
  margin-top: 8px;
`;

type RootStackParamList = {
  MyPage: undefined; // undefined because you aren't passing any params to the home screen
  SignUpDetailsSports: undefined;
  SignUpDetailsDone: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsKeyword = ({navigation}: Props) => {
  const [canSelect, setCanSelect] = useState(true);
  const [extro, setExtro] = useState(false);
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
        <TitleText style={{color: '#2C803A'}}>키워드</TitleText>
        <TitleText>를 설정해주세요</TitleText>
      </TitleView>

      <View style={{alignItems: 'center', marginTop: 1}}>
        <View style={{width: 330}}>
          <SmallDescription>간단한 키워드로 나를 표현해봐요!</SmallDescription>
        </View>
      </View>

      <View style={{height: 50}}></View>
      <View style={{width: SCREEN_WIDTH, height: 30, alignItems: 'center'}}>
        <View style={{width: 330, flexDirection: 'row'}}>
          <Text style={{color: '#C5C5C5'}}>0</Text>
          <Text style={{color: '#C5C5C5'}}>/5</Text>
        </View>
      </View>
      <FilterWrapper>
        <FilterContainer>
          <FilterButton name={'외향적'} />
          <FilterButton name={'내향적'} />
          <FilterButton name={'즉흥적'} />
          <FilterButton name={'계획적'} />
        </FilterContainer>
        <FilterContainer>
          <FilterButton name={'열정적'} />
          <FilterButton name={'용병'} />
          <FilterButton name={'분위기 메이커'} />
          <FilterButton name={'이타적인'} />
        </FilterContainer>
        <FilterContainer>
          <FilterButton name={'스트라이커'} />
          <FilterButton name={'패스왕'} />
          <FilterButton name={'강철체력'} />
          <FilterButton name={'공격적'} />
        </FilterContainer>
      </FilterWrapper>

      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsDone');
          }}>
          <NextButton text={'다음으로 넘어가기'} isOn={true} />
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
