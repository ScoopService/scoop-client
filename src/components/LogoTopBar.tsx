import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: white;
  //background-color: #80c76d;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: space-around;
`;

const LogoImg = styled.Image`
  margin-right: ${SCREEN_WIDTH / 2.5}px;
  //background-color: #80c76d;
  object-fit: contain;
`;

const IconContainer = styled.View`
  height: 40px;
  width: 40px;
  //background-color: #80c76d;
  justify-content: center;
  align-items: center;
`;

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
};

type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeNavigationProp;
};

const LogoTopBar = ({navigation}: Props) => {
  return (
    <Wrapper>
      <LogoImg source={require('../assets/images/Logo.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <IconContainer>
          <Ionicons name={'notifications'} size={25} color={'black'} />
        </IconContainer>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default LogoTopBar;
