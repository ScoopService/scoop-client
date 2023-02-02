import styled from 'styled-components/native';
import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Wrapper = styled.View`
  //background-color: #39cb51;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  width: ${SCREEN_WIDTH}px;
  height: 50px;
  border-bottom: white;
  //border-bottom-width: 3px;
`;

const LabelText = styled.Text`
  color: black;
  font-weight: 500;
  font-size: 16px;
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

type RouteLabelProps = {
  title: string;
  route: string;
  navigation: MyPageNavigationProp;
};

export const RouteLabel = (props: RouteLabelProps) => {
  let pages = [
    'MyPage',
    'ManageGroups',
    'MyActiveGroups',
    'LikedGroups',
    'History',
  ];

  return (
    <TouchableOpacity
      onPress={() => {
        // if (
        //   props.route === 'MyPage' ||
        //   'ManageGroups' ||
        //   'MyActiveGroups' ||
        //   'LikedGroups' ||
        //   'History'
        // ) {
        //   props.navigation.navigate(props.route);
        // } else {
        //   console.log('Error while navigating');
        // }
        // Error

        if (props.route === 'MyPage') {
          props.navigation.navigate(props.route);
        } else if (props.route === 'ManageGroups') {
          props.navigation.navigate(props.route);
        } else if (props.route === 'MyActiveGroups') {
          props.navigation.navigate(props.route);
        } else if (props.route === 'LikedGroups') {
          props.navigation.navigate(props.route);
        } else if (props.route === 'History') {
          props.navigation.navigate(props.route);
        } else {
          props.navigation.navigate('MyPage');
          console.log('Error while navigating');
        }
      }}>
      <Wrapper>
        <LabelText style={{marginLeft: 28}}>{props.title}</LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style={{marginRight: 27}}
          size={25}
          color={'#C1CCDA'}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
