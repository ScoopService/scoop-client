import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Tutorial, TutorialFourth} from '../carousel/Tutorial';
import WelcomeCarousel from '../carousel/WelcomeCarousel';
import Geolocation from "react-native-geolocation-service";

export const GroupFeed = () => {
  const [test, setTest] = useState('test');

  useEffect(() => {
    function getTest() {
      fetch("https://api.workoutday.link/v1/meetings?page=0&size=1&sort=string")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        });
    }

    // getTest();
  }, []);

  return (
    <View>
      <View style={{
        height: 100,
        width: 300,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Example</Text>
      </View>
    </View>
    // <View style={{backgroundColor: 'white', flex: 1}}>
    //   <View style={{height: 110}}></View>
    //   <TutorialFourth/>
    //   <View style={{justifyContent: 'center', alignItems: 'center'}}>
    //     <Pressable style={{
    //       justifyContent: 'center',
    //       marginTop: 84,
    //       width: 300,
    //       height: 70,
    //     }}>
    //       <Image style={{width: '100%', resizeMode: 'contain'}} source={require('../assets/images/LoginButton.png')}/>
    //     </Pressable>
    //     <Pressable>
    //       <Text style={{color: '#C5C5C5'}}>회원가입하기</Text>
    //     </Pressable>
    //   </View>
    // </View>
  );
};

