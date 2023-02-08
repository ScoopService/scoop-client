import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'pinar';
import GroupCard from '../components/GroupCard';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const GroupCarousel = () => {
  return (
    <Carousel
      loop={false}
      index={0}
      showsControls={false}
      autoplay={false}
      width={SCREEN_WIDTH}
      height={200}>
      <GroupCard />
      <GroupCard />
      <GroupCard />
    </Carousel>
  );
};

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3c9a8',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#84b59f',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69a297',
  },
  text: {
    color: '#1f2d3d',
    fontSize: 48,
    fontWeight: 'bold',
  },
};

export default GroupCarousel;
