import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import FilterBanner from '../components/FilterBanner';
import GroupCard from '../components/GroupCard';

const Container = styled.View`
  //flex: 1;
  //background-color: #5dae48;
  background-color: white;
`;

const SectionTitle = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const PopularGroupsCard = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const GroupSearch = () => {
  useEffect(() => {
    //console.log('GroupSearch.tsx effect');
  }, []);

  return (
    <Container>
      <FilterBanner />
      {/*<SectionTitle>인기 모임</SectionTitle>*/}
      <ScrollView>
        <PopularGroupsCard>
          {/*TODO : groupArr.map((group, index) => (*/}
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </PopularGroupsCard>
      </ScrollView>
    </Container>
  );
};
