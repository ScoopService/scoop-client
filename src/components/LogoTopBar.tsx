import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  object-fit: contain;
`;

const LogoTopBar = () => {
  return (
    <Wrapper>
      <LogoImg source={require('../assets/images/Logo.png')} />
      <Ionicons name={'notifications'} size={25} color={'black'} />
    </Wrapper>
  );
};

export default LogoTopBar;
