import styled from 'styled-components/native';
import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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

interface RouteLabelProps {
  title: string;
  route: string;
}

export const RouteLabel = (props: RouteLabelProps) => {
  return (
    <TouchableOpacity>
      <Wrapper>
        <LabelText style ={{marginLeft: 28}}>{props.title}</LabelText>
        <MaterialIcons
          name={'arrow-forward-ios'}
          style ={{marginRight: 27}}
          size={25}
          color={'#C1CCDA'}
        />
      </Wrapper>
    </TouchableOpacity>
  );
};
