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
import Geolocation from 'react-native-geolocation-service';

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
  CreateMeetingDescription: undefined;
  CreateMeetingDate: undefined;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

interface ILocation {
  latitude: number;
  longitude: number;
}

const API_KEY = 'AIzaSyBQU2FYDE_pJxBG45tgQZbGY6wZX72mbuM';

export const CreateMeetingLocation = ({navigation}: Props) => {
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Geolocation
    async function getLocation() {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({
            latitude,
            longitude,
          });
          // console.log(location?.latitude, location?.longitude);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }

    getLocation();
  }, []);

  useEffect(() => {
    // Reverse Geocoding
    if (!location) {
      return;
    }
    const getAddress = () => {
      console.log(`${location?.latitude},${location?.longitude}`);
      fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          location?.latitude +
          // '37.499699' +
          ',' +
          location?.longitude +
          // '127.008768' +
          '&key=' +
          API_KEY +
          '&language=ko',
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.results[2].address_components[1]);
          setAddress(
            responseJson.results[2].address_components[3].long_name +
              ' ' +
              responseJson.results[2].address_components[2].long_name +
              ' ' +
              responseJson.results[2].address_components[1].long_name,
          );
        })
        .catch(err => console.log(err));
    };

    // getAddress();
  }, [location]);
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
          source={require('../assets/images/progressBar/Variant6.png')}
        />
      </View>
      <TitleView>
        <TitleDescription>모임 개설하기</TitleDescription>
        <TitleText>만날 장소를 정해요!</TitleText>
      </TitleView>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <View style={{justifyContent: 'flex-start', width: 335}}>
          <Text style={{fontWeight: '700', fontSize: 18}}>만날 장소</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 0,
          }}>
          <TextInputContainer>
            <CustomTextInput
              placeholderTextColor={'#d9d9d9'}
              placeholder={'활동 지역'}
              maxLength={16}>
              {address ? `${address}` : '잠시만 기다려주세요..'}
            </CustomTextInput>
            <Ionicons
              name={'close-circle-sharp'}
              style={{color: '#C5C5C5', marginTop: 10}}
              size={22}
            />
            {/* TODO: onPress -> Text 지우기*/}
          </TextInputContainer>
          <View
            style={{justifyContent: 'flex-start', width: 330, marginTop: 10}}>
            <SmallDescription>
              비속어, 특수문자는 사용할 수 없어요
            </SmallDescription>
          </View>
        </View>

      </View>
      <NextButtonContainer>
        <Pressable
          onPress={() => {
            navigation.navigate('CreateMeetingDate');
          }}>
          {address ? (
            <NextButton text={'다음으로 넘어가기'} isOn={true} />
          ) : (
            <NextButton text={'다음으로 넘어가기'} isOn={false} />
          )}
        </Pressable>
      </NextButtonContainer>
    </Container>
  );
};
