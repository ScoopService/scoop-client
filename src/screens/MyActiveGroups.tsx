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
  MyPage: undefined; // undefined because you aren't passing any params to the home screen
  ProfileSettings: undefined;
  ManageGroups: undefined;
  MyActiveGroups: undefined;
  LikedGroups: undefined;
  History: undefined;
};

type MyPageNavigationProp = StackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: MyPageNavigationProp;
};


export const MyActiveGroups = ({navigation}: Props) => {
  useEffect(() => {
    //console.log('Notification.tsx effect');
  }, []);

  return (
    <Container>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </Container>
  );
};
