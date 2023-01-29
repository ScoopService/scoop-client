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
import {RootStackParamList} from '../navigator/BottomTabsNavigator';

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

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LogoTopBar = ({navigation}: Props) => {
  return (
    <Wrapper>
      <LogoImg source={require('../assets/images/Logo.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <IconContainer>
          <Ionicons name={'notifications'} size={25} color={'black'} />
        </IconContainer>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default LogoTopBar;
