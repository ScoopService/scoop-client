import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Text} from 'react-native';

const Wrapper = styled.View`
  background-color: white;
  //background-color: #A0DB90;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  border-radius: 10px;
  border: #e6e6e6;
`;

const FilterText = styled.Text`
  color: #808080;
  font-size: 8px;
  margin: 3px 7px;
  font-weight: 500;
`;

interface FilterProps {
  name: string;
}

const GroupTag = (props: FilterProps) => {
  return (
    <Wrapper>
      <FilterText>{props.name}</FilterText>
    </Wrapper>
  );
};

export default GroupTag;
