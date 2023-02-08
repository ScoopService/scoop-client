import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, Pressable} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Tutorial} from "../carousel/Tutorial";
import WelcomeCarousel from "../carousel/WelcomeCarousel";
import {calculateInputHeight} from "react-native-paper/lib/typescript/components/TextInput/helpers";

export const SignUp = () => {

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 110}}></View>
      <WelcomeCarousel/>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable style={{
          justifyContent: 'center',
          marginTop: 84,
          width: 300,
          height: 70,
        }}>
          <Image style={{width: '100%', resizeMode: 'contain'}} source={require('../assets/images/LoginButton.png')}/>
        </Pressable>
        <Pressable>
          <Text style={{color: '#C5C5C5'}}>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
};

