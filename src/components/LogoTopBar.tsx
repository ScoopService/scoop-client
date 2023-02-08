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
  height: 30px;
  //background-color: #80c76d;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
  Search: undefined;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

const LogoTopBar = ({navigation}: Props) => {
  return (
    <Wrapper>
      <LogoImg
        source={require('../assets/images/Logo.png')}
        style={{width: 102, resizeMode:'contain'}}
      />
      <IconContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
          style={{marginRight: 15}}>
          <Ionicons name={'search'} size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Ionicons name={'notifications'} size={25} color={'black'} />
        </TouchableOpacity>
      </IconContainer>
    </Wrapper>
  );
};

export default LogoTopBar;
