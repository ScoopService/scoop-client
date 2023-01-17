import styled from 'styled-components/native';
import React from 'react';
import {Text} from 'react-native';

const Wrapper = styled.TouchableOpacity`
  background-color: white;
  //background-color: #A0DB90;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 4px;
  border: #dfdfdf;
`;

const FilterText = styled.Text`
  color: gray;
  font-size: 12px;
  margin: 9px 13px;
`;

interface FilterProps {
  name: string;
}

const FilterButton = (props: FilterProps) => {
  return (
    <Wrapper>
      <FilterText>{props.name}</FilterText>
    </Wrapper>
  );
};

export default FilterButton;
