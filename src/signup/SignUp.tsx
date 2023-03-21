import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Tutorial} from '../carousel/Tutorial';
import WelcomeCarousel from '../carousel/WelcomeCarousel';
import {NavigationActions} from 'react-navigation';
import navigate = NavigationActions.navigate;
import {StackNavigationProp} from '@react-navigation/stack';
import Geolocation from 'react-native-geolocation-service';

type RootStackParamList = {
  SignUp: undefined; // undefined because you aren't passing any params to the home screen
  HomeBottomTabs: undefined;
  SignUpDetails: undefined;
};

type MyPageNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: MyPageNavigationProp;
};

export const SignUp = ({navigation}: Props) => {
  useEffect(() => {
    requestPermissions().then(r => console.log(r));
  }, []);

  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        // do something if granted...
      }
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('granted');
        // do something if granted...
      }
    }
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 80}}></View>
      <WelcomeCarousel />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            // navigation.replace('SignUpDetails');
            navigation.navigate('SignUpDetails');
          }}
          style={{
            justifyContent: 'center',
            marginTop: 98,
            width: 300,
            height: 70,
          }}>
          <Image
            style={{width: '100%', resizeMode: 'contain'}}
            source={require('../assets/images/LoginButton.png')}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace('HomeBottomTabs');
          }}>
          <Text style={{color: 'black'}}>회원가입하기dfgdfgh</Text>
        </Pressable>
      </View>
    </View>
  );
};
