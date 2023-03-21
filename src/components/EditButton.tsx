import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Text} from 'react-native';

const Wrapper = styled.View`
  //background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 335px;
  height: 44px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
  margin: 9px 13px;
`;

interface Props {
  text: String;
}

const EditButton = ({text}: Props) => {
  return (
    <Wrapper style={{backgroundColor: '#39cb51'}}>
      <ButtonText>{text}</ButtonText>
    </Wrapper>
  );
};

export default EditButton;
