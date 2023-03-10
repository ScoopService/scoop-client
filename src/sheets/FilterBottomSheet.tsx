import React, {useEffect} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterButtonLarge from '../components/FilterButtonLarge';
import CalendarButton from '../components/CalendarButton';
import FilterButton from '../components/FilterButton';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: #d6f0d0;
  background-color: white;
`;

const FilterTitleView = styled.View`
  //background-color: white;
  //background-color: #bce6b1;
  border-bottom: #ececec;
  border-bottom-width: 0.2px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FilterTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;

const ResetButton = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #808080;
`;

const MenuContainer = styled.View`
  //background-color: #bce6b1;
  height: 31px;
  justify-content: center;
  margin-left: 23px;
  margin-top: 12.2px;
`;

const MenuTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

const FilterContainerLarge = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH}px;
  height: 34px;
  margin-top: 8px;
  margin-left: 6px;
  //background-color: #bce6b1;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: ${SCREEN_WIDTH}px;
  height: 34px;
  margin-top: 8px;
  margin-left: 25px;
  //background-color: #bce6b1;
`;

const ApplyButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 252px;
  height: 45px;
  border-radius: 10px;
  background-color: #39cb51;
`;

const ApplyButtonText = styled.Text`
  font-size: 14px;
  color: white;
`;

interface Props {
  handleCloseModalPress: Function;
}

export const FilterBottomSheet = ({handleCloseModalPress}: Props) => {
  useEffect(() => {
    //console.log('FilterBottomSheet.tsx effect');
  }, []);

  return (
    <Container>
      <FilterTitleView>
        <TouchableOpacity style={{marginLeft: 17}} onPress={()=>{handleCloseModalPress()}}>
          <Ionicons
            name={'ios-arrow-back-outline'}
            size={26}
            color={'black'}
            style={{}}
          />
        </TouchableOpacity>
        <FilterTitle>??????</FilterTitle>
        <TouchableOpacity style={{marginRight: 23}}>
          <ResetButton>?????????</ResetButton>
          {/*TODO: ????????? ??????*/}
        </TouchableOpacity>
      </FilterTitleView>
      <BottomSheetScrollView>
        <MenuContainer>
          <MenuTitle>??????</MenuTitle>
        </MenuContainer>
        <FilterContainerLarge>
          <FilterButtonLarge name={'?????? ???'} />
          <FilterButtonLarge name={'?????? ???'} />
          <FilterButtonLarge name={'????????????'} />
        </FilterContainerLarge>
        <CalendarButton />

        <View style={{height: 15}} />
        <MenuContainer>
          <MenuTitle>??????</MenuTitle>
        </MenuContainer>
        <FilterContainer>
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'????????????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
        </FilterContainer>

        <View style={{height: 15}} />
        <MenuContainer>
          <MenuTitle>?????? ??????</MenuTitle>
        </MenuContainer>
        <FilterContainer>
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
        </FilterContainer>

        <View style={{height: 15}} />
        <MenuContainer>
          <MenuTitle>??????</MenuTitle>
        </MenuContainer>
        <FilterContainer>
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'????????????'} />
        </FilterContainer>

        <View style={{height: 15}} />
        <MenuContainer>
          <MenuTitle>??????</MenuTitle>
        </MenuContainer>
        <FilterContainer>
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
          <FilterButton name={'??????'} />
        </FilterContainer>

        <View style={{height: 40}} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ApplyButton onPress={()=>{handleCloseModalPress()}}>
            <ApplyButtonText>????????????</ApplyButtonText>
          </ApplyButton>
        </View>
      </BottomSheetScrollView>
    </Container>
  );
};
