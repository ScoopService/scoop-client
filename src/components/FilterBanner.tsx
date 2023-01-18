import styled from 'styled-components/native';
import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterButton from './FilterButton';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: white;
  //background-color: #80c76d;
  flex-direction: column;
  align-items: center;
  height: 110px;
  justify-content: center;
`;

const LocationContainer = styled.TouchableOpacity`
  background-color: white;
  //background-color: #BCE6B1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${SCREEN_WIDTH / 2}px;
`;

const LocationName = styled.Text`
  background-color: white;
  //background-color: #BCE6B1;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
`;

const FilterOptions = styled.View`
  background-color: white;
  //background-color: #D6F0D0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const FilterIcon = styled.TouchableOpacity`
  background-color: white;
  //background-color: #BCE6B1
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 4px;
  border: #dfdfdf;
`;

const FilterBanner = () => {
  let location;


  return (
    <Wrapper>
      <View style={{flexDirection: 'row'}}>
        <LocationContainer>
          <LocationName>화양동{location}</LocationName>
          <MaterialIcons name={'arrow-forward-ios'} size={21} color={'black'} />
        </LocationContainer>
        <Ionicons name={'search'} size={25} color={'black'} />
      </View>
      <FilterOptions>
        <FilterIcon>
          <Ionicons
            name={'options-outline'}
            size={18}
            color={'black'}
            style={{margin: 7}}
          />
        </FilterIcon>
        <FilterButton name={'농구'} />
        <FilterButton name={'러닝'} />
        <FilterButton name={'배드민턴'} />
        <FilterButton name={'볼링'} />
        <FilterButton name={'풋살'} />
      </FilterOptions>
    </Wrapper>
  );
};

export default FilterBanner;
