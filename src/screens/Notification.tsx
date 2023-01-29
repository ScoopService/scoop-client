import React, {useEffect, useState} from 'react';
import {Dimensions, Text, } from 'react-native';
import styled from 'styled-components/native';
import { NavigationStackProp } from 'react-navigation-stack';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');


const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  background-color: white;
`;

export const Notification = () => {
  useEffect(() => {
    //console.log('Notification.tsx effect');
  }, []);

  return <Container>
    <Text>qwer</Text>
  </Container>;
};
