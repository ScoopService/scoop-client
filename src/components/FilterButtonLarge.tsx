import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Text} from 'react-native';

const Wrapper = styled.TouchableOpacity`
  background-color: white;
  //background-color: #A0DB90;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 10px;
  border: #dfdfdf;
`;

const FilterText = styled.Text`
  color: white;
  font-size: 12px;
  margin: 8px 34px 8px;
`;

const FilterTextSelected = styled.Text`
  color: gray;
  font-size: 12px;
  margin: 8px 34px 8px;
  
`;

interface FilterProps {
  name: string;
}

const FilterButtonLarge = (props: FilterProps) => {
  const [isOn, setIsOn] = useState(false);

  return isOn ? (
    <Wrapper
      style={{backgroundColor: '#39CB50'}}
      onPress={() => {
        // console.log("OnPress", isOn)
        setIsOn(current => !current);
      }}>
      <FilterText style={{color: 'white'}}>{props.name}</FilterText>
    </Wrapper>
  ) : (
    <Wrapper
      onPress={() => {
        // console.log("OnPress", isOn)
        setIsOn(current => !current);
      }}>
      <FilterTextSelected>{props.name}</FilterTextSelected>
    </Wrapper>
  );
};

export default FilterButtonLarge;
