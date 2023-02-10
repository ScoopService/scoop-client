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
  top: ${SCREEN_HEIGHT/1.25}px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH}px;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 335px;
`;

type RootStackParamList = {
  MyPage: undefined; // undefined because you aren't passing any params to the home screen
  SignUpDetailsLocation: undefined;
  SignUpDetailsKeyword: undefined;
};

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: SignUpNavigationProp;
};

export const SignUpDetailsSports = ({navigation}: Props) => {
  const [futsal, setFutsal] = useState(false);
  const [basketball, setBasketball] = useState(false);
  const [running, setRunning] = useState(false);
  const [badminton, setBadminton] = useState(false);
  const [bowling, setBowling] = useState(false);
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
      <View>
        <ScrollView>
          <TitleView>
            <TitleText style={{color: '#2C803A'}}>관심있는 운동</TitleText>
            <TitleText>을 선택해주세요</TitleText>
          </TitleView>

          <View style={{alignItems: 'center', marginTop: 1}}>
            <View style={{width: 330}}>
              <SmallDescription>
                주로 하는 운동을 알려주면 친구를 찾기 더 쉬워져요!
              </SmallDescription>
            </View>
          </View>
          <View style={{height:20}}/>
          <SportsContainer
            onPress={() => {
              setFutsal(!futsal);
            }}>
            <SportsImage
              source={
                futsal
                  ? require('../assets/images/Variant10.png')
                  : require('../assets/images/Variant20.png')
              }
            />
          </SportsContainer>
          {futsal ? (
            <FilterWrapper>
              <FilterContainer>
                <FilterButton name={'초수'} />
                <FilterButton name={'중수'} />
                <FilterButton name={'고수'} />
              </FilterContainer>
            </FilterWrapper>
          ) : (
            <></>
          )}
          <SportsContainer
            onPress={() => {
              setBasketball(!basketball);
            }}>
            <SportsImage
              source={
                basketball
                  ? require('../assets/images/Variant11.png')
                  : require('../assets/images/Variant21.png')
              }
            />
          </SportsContainer>
          {basketball ? (
            <FilterWrapper>
              <FilterContainer>
                <FilterButton name={'초수'} />
                <FilterButton name={'중수'} />
                <FilterButton name={'고수'} />
              </FilterContainer>
            </FilterWrapper>
          ) : (
            <></>
          )}

          <SportsContainer
            onPress={() => {
              setRunning(!running);
            }}>
            <SportsImage
              source={
                running
                  ? require('../assets/images/Variant12.png')
                  : require('../assets/images/Variant22.png')
              }
            />
          </SportsContainer>
          {running ? (
            <FilterWrapper>
              <FilterContainer>
                <FilterButton name={'초수'} />
                <FilterButton name={'중수'} />
                <FilterButton name={'고수'} />
              </FilterContainer>
            </FilterWrapper>
          ) : (
            <></>
          )}

          <SportsContainer
            onPress={() => {
              setBadminton(!badminton);
            }}>
            <SportsImage
              source={
                badminton
                  ? require('../assets/images/Variant13.png')
                  : require('../assets/images/Variant23.png')
              }
            />
          </SportsContainer>
          {badminton ? (
            <FilterWrapper>
              <FilterContainer>
                <FilterButton name={'초수'} />
                <FilterButton name={'중수'} />
                <FilterButton name={'고수'} />
              </FilterContainer>
            </FilterWrapper>
          ) : (
            <></>
          )}

          <SportsContainer
            onPress={() => {
              setBowling(!bowling);
            }}>
            <SportsImage
              source={
                bowling
                  ? require('../assets/images/Variant14.png')
                  : require('../assets/images/Variant24.png')
              }
            />
          </SportsContainer>
          {bowling ? (
            <FilterWrapper>
              <FilterContainer>
                <FilterButton name={'초수'} />
                <FilterButton name={'중수'} />
                <FilterButton name={'고수'} />
              </FilterContainer>
            </FilterWrapper>
          ) : (
            <></>
          )}

          <View style={{height: 170}} />
        </ScrollView>
      </View>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUpDetailsKeyword');
          }}>
          {futsal || basketball || running || bowling || badminton ? (
            <NextButton text={'다음으로 넘어가기'} isOn={true} />
          ) : (
            <NextButton text={'다음으로 넘어가기'} isOn={false} />
          )}
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
