import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'pinar';
import GroupCard from '../components/GroupCard';
import styled from 'styled-components/native';
import {Tutorial, TutorialSecond, TutorialThird} from './Tutorial';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const PopularGroupsCard = styled.View`
  //background-color: white;
  justify-content: center;
  align-items: center;
`;

const WelcomeCarousel = () => {
  return (
    <Carousel
      loop={false}
      index={0}
      showsControls={false}
      autoplay={false}
      width={SCREEN_WIDTH}
      height={430}
      mergeStyles={true}
      dotsContainerStyle={{}}
      dotStyle={{
        backgroundColor: '#d9d9d9',
        marginLeft: 10,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
      activeDotStyle={{
        backgroundColor: '#2C803A',
        marginLeft: 10,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
      style={{marginBottom: -50}}>
      <Tutorial />
      <TutorialSecond />
      <TutorialThird />
    </Carousel>
  );
};


export default WelcomeCarousel;
