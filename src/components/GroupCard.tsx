import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import GroupTag from './GroupTag';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Wrapper = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  width: ${SCREEN_WIDTH / 1.1}px;
  height: 99px;
  border: #eeeeee;
  border-radius: 10px;
  margin-top: 15px;
`;

const GroupThumbnail = styled.Image`
  width: 80px;
  height: 81px;
  background-color: white;
  border-radius: 10px;
  margin: 8px 1px 10px 8px;
  
  //border-bottom-left-radius: 10px;
  //border-top-left-radius: 10px;
`;

const Container = styled.View`
  width: 70%;
  height: 100%;
  //background-color: #104b00;
  //background-color: #fafafa;
  background-color: #ffffff;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;
//TODO: 그림자 추가하기

const GroupInfo = styled.View`
  width: 90%;
  height: 90%;
  //background-color: #287913;
`;

const GroupTitle = styled.Text`
  height: 20%;
  font-weight: 700;
  font-size: 16px;
  margin-top: 5px;
  //background-color: #4a9c35;
`;
//TODO: 글자 수 제한하기 (넘어가면 안되서)

const GroupDescription = styled.Text`
  color: #7c7c7c;
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
  color: #808080;
  font-size: 11px;
  margin-left: 4px;
  margin-right: 8px;
  margin-bottom: 1px;
`;

const GroupCard = () => {
  return (
    <TouchableOpacity>
      <Wrapper>
        <GroupThumbnail
          source={require('../assets/images/Rectangle2193.png')}
        />
        <Container>
          <GroupInfo>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft:-3, marginTop:2}}>
              <GroupTag name={'러닝'} />
              <GroupTag name={'초보'} />
              <GroupTag name={'연습'} />
            </View>
            <GroupTitle>내일은 농구왕</GroupTitle>
            {/*<GroupDescription>우리 모두 강백호가 되어보자</GroupDescription>*/}

            <DetailContainer>
              <View style={{flexDirection: 'row', marginTop: 2}}>
                <Ionicons name={'location-sharp'} size={14} color={'#39CB51'} />
                <GroupDetail>광진구</GroupDetail>
                <FeatherIcons name={'calendar'} size={14} color={'#39CB51'} />
                <GroupDetail>11월 17일 오후 7:00</GroupDetail>
              </View>
              {/*<View style={{flexDirection: 'row', marginTop: 2}}>*/}
              {/*  <FeatherIcons name={'calendar'} size={12} color={'#39CB51'} />*/}
              {/*  <GroupDetail>11월 17일 오후 7:00</GroupDetail>*/}
              {/*</View>*/}
              <View style={{flexDirection: 'row', marginTop: 1}}>
                <Ionicons name={'people'} size={14} color={'#39CB51'} />
                <GroupDetail>2/6 혼성</GroupDetail>
              </View>
            </DetailContainer>
            {/*TODO: <ExerciseTags>, <Attendees> */}
          </GroupInfo>
        </Container>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default GroupCard;
