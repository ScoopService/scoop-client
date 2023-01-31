import React, {useEffect, useState} from 'react';
import {Button, Dimensions, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  background-color: white;
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

export const Notification = ({navigation}: Props) => {
  useEffect(() => {
    //console.log('Notification.tsx effect');
  }, []);

  return (
    <Container>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </Container>
  );
};
