import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  width: ${SCREEN_WIDTH / 1.1}px;
  height: 125px;
  border-radius: 10px;
  margin-top: 15px;
`;

const GroupThumbnail = styled.Image`
  width: 30%;
  height: 100%;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Container = styled.View`
  width: 70%;
  height: 100%;
  //background-color: #104b00;
  background-color: #FAFAFA;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;
//TODO : 그림자 추가하기

const GroupInfo = styled.View`
  width: 90%;
  height: 90%;
  //background-color: #287913;
`;

const GroupTitle = styled.Text`
  height: 20%;
  font-weight: 700;
  font-size: 14px;
  //background-color: #4a9c35;
`;
//TODO : 글자 수 제한하기 (넘어가면 안되서)

const GroupDescription = styled.Text`
  height: 20%;
  font-weight: 600;
  font-size: 11px;
  //background-color: #4a9c35;
`;

const DetailContainer = styled.View`
  height: 40%;
  //background-color: #80c76d;
  margin-top: 10px;
`;

const GroupDetail = styled.Text`
  //background-color: #80c76d;
  font-size: 10px;
`;

const GroupCard = () => {

  return (
    <TouchableOpacity>
      <Wrapper>
        <GroupThumbnail source={require('../assets/images/Rectangle2193.png')} />
        <Container>
          <GroupInfo>
            <GroupTitle>내일은 농구왕</GroupTitle>
            <GroupDescription>우리 모두 강백호가 되어보자</GroupDescription>
            <DetailContainer>
              <GroupDetail>광진구 OO체육관</GroupDetail>
              <GroupDetail>11월 17일 오후 7:00</GroupDetail>
              <GroupDetail>2/6</GroupDetail>
            </DetailContainer>
            {/*TODO : <ExerciseTags>, <Attendees> */}
          </GroupInfo>
        </Container>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default GroupCard;
