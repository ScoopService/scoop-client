import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import add from 'date-fns/add';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: white;
  //background-color: #80C76D;
  flex-direction: row;
  align-items: center;
  height: 40px;
  justify-content: space-around;
`;
//TODO : 그림자 추가하기

const DateText = styled.Text`
  color: darkgreen;
  font-size: 16px;
`;

const DateBanner = () => {
  const [days, setDays] = useState([] as any);

  const getCurrentDay = () => {
    console.log('getCurrentDay');
    let today = new Date();
    let daysThisWeek: number[] = [];
    for (let i = 0; i < 5; i++) {
      let daysAhead = add(today, {days: i});
      daysThisWeek.push(daysAhead.getDate());
    }
    setDays(daysThisWeek);
  };

  useEffect(() => {
    getCurrentDay();
  }, []);

  return (
    <Wrapper>
      {days.map((day: number) =>
        day === new Date().getDate() ? <DateText>오늘</DateText> : <DateText>{day}일</DateText>,
      )}
    </Wrapper>
  );
};

export default DateBanner;
