import React, {useEffect} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterButtonLarge from '../components/FilterButtonLarge';
import CalendarButton from '../components/CalendarButton';
import FilterButton from '../components/FilterButton';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {LocationMap} from "../map/LocationMap";

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: #d6f0d0;
  background-color: white;
`;

const FilterTitleView = styled.View`
  //background-color: white;
  border-bottom: #ececec;
  border-bottom-width: 0.2px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LocationTitle = styled.Text`
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
  margin-top: 20.2px;
`;

const MenuTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

const MenuExplanation = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  margin-top: 4px;
`;

const MapContainer = styled.View`
  height: 280px;
  margin-top: 40px;
  //background-color: #bce6b1;
  justify-content: center;
  align-items: center;
`;

const TipContainer = styled.View`
  height: 20px;
  margin-top: 34px;
  align-items: center;
  justify-content: center;
`;

const TipText = styled.Text`
  font-size: 12px;
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

export const LocationBottomSheet = ({handleCloseModalPress}: Props) => {
  useEffect(() => {
    //console.log('FilterBottomSheet.tsx effect');
  }, []);

  let location = '광진구';
  return (
    <Container>
      <FilterTitleView>
        <TouchableOpacity
          style={{marginLeft: 17}}
          onPress={() => {
            handleCloseModalPress();
          }}>
          <Ionicons
            name={'ios-arrow-back-outline'}
            size={26}
            color={'black'}
            style={{}}
          />
        </TouchableOpacity>
        <LocationTitle>지역 설정하기</LocationTitle>
        <TouchableOpacity style={{marginRight: 23}}>
          <ResetButton>초기화</ResetButton>
          {/*TODO: 초기화 방식*/}
        </TouchableOpacity>
      </FilterTitleView>

      <BottomSheetScrollView>
        <MenuContainer>
          <MenuTitle>현재 지역: {location}</MenuTitle>
          <MenuExplanation>보고싶은 동네를 선택해보세요!</MenuExplanation>
        </MenuContainer>

        <MapContainer>
          <LocationMap />
        </MapContainer>

        <TipContainer>
          <TipText>복수선택을 통해 더 많은 동네를 확인할 수 있어요!</TipText>
        </TipContainer>

        <View style={{height: 60}} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ApplyButton
            onPress={() => {
              handleCloseModalPress();
            }}>
            <ApplyButtonText>적용하기</ApplyButtonText>
          </ApplyButton>
        </View>
      </BottomSheetScrollView>
    </Container>
  );
};
