import styled from 'styled-components/native';
import {Alert, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import add from 'date-fns/add';

const Wrapper = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  height: 180px;
`;

const DateBanner = () => {
  const [days, setDays] = useState([]);

  const getCurrentDay = () => {
    console.log('getCurrentDay');
    let today = new Date();
    let tomorrow = add(today, {days: 3});
    console.log(tomorrow.getDay());
  };

  useEffect(() => {
    getCurrentDay();
  }, []);
  return <Wrapper></Wrapper>;
};

export default DateBanner;
