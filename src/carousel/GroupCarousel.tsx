import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'pinar';
import GroupCard from '../components/GroupCard';
import styled from "styled-components/native";

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const PopularGroupsCard = styled.View`
  //background-color: white;
  justify-content: center;
  align-items: center;
`;

const GroupCarousel = () => {
  return (
    <Carousel
      loop={false}
      index={0}
      showsControls={false}
      autoplay={false}
      width={SCREEN_WIDTH}
      height={170}
      mergeStyles={true}
      dotStyle={{
        backgroundColor: '#d9d9d9',
        marginLeft: 10,
        width: 6,
        height: 6,
      }}
      activeDotStyle={{
        backgroundColor: '#39CB51',
        marginLeft: 10,
        width: 6,
        height: 6,
      }}
      style={{marginBottom: -50}}
    >
      <PopularGroupsCard>
        <GroupCard/>
      </PopularGroupsCard>
      <PopularGroupsCard>
        <GroupCard/>
      </PopularGroupsCard>
      <PopularGroupsCard>
        <GroupCard/>
      </PopularGroupsCard>
    </Carousel>
  );
};
export default GroupCarousel;
