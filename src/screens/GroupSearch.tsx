import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import FilterBanner from '../banners/FilterBanner';
import GroupCard from '../components/GroupCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FilterBottomSheet} from '../sheets/FilterBottomSheet';
import {LocationBottomSheet} from '../sheets/LocationBottomSheet';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: #5dae48;
  //background-color: white;
  backgroundcolor: 'rgba(52, 52, 52, 0.8)';
`;

const SectionTitle = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const PopularGroupsCard = styled.View`
  //background-color: white;
  justify-content: center;
  align-items: center;
`;

type RootStackParamList = {
  GroupSearch: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
  Search: undefined;
};

type GroupSearchNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroupSearch'
>;

type Props = {
  navigation: GroupSearchNavigationProp;
};

export const GroupSearch = ({navigation}: Props) => {
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [showLocationModal, setShowLocationModal] = useState(true);

  useEffect(() => {
    if (!showFilterModal) {
      handlePressShowFilterModal();
    } else {
      // close modal
      handlePressCloseFilterModal();
    }
  });

  useEffect(() => {
    if (!showLocationModal) {
      handlePressShowLocationModal();
    } else {
      // close modal
      handlePressCloseLocationModal();
    }
  });

  const filterStateHandler = () => {
    setShowFilterModal(current => !current);
    if (showFilterModal) {
      handlePressShowFilterModal();
    }
    console.log(showFilterModal);
  };

  const locationStateHandler = () => {
    setShowLocationModal(current => !current);
    if (showLocationModal) {
      handlePressShowLocationModal();
    }
    console.log(showLocationModal);
  };

  // ref
  const FilterBottomSheetRef = useRef<BottomSheetModal>(null);
  const LocationBottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const filterSnapPoints = useMemo(() => ['25%', '50%', '93%'], []);
  const locationSnapPoints = useMemo(() => ['25%', '50%', '93%'], []);

  // callbacks
  const handlePressShowFilterModal = useCallback(() => {
    FilterBottomSheetRef.current?.present();
  }, []);

  const handlePressShowLocationModal = useCallback(() => {
    LocationBottomSheetRef.current?.present();
  }, []);

  const handlePressCloseFilterModal = useCallback(() => {
    FilterBottomSheetRef.current?.close();
  }, []);

  const handlePressCloseLocationModal = useCallback(() => {
    LocationBottomSheetRef.current?.close();
  }, []);

  const handleFilterSheetChanges = useCallback((index: number) => {
    console.log('FilterSheet snapPoint:', index);
    if (index === -1) {
      setShowFilterModal(true); // true로 변경 직후 handler에 의해 값 변경
    }
  }, []);

  const handleLocationSheetChanges = useCallback((index: number) => {
    console.log('LocationSheet snapPoint:', index);
    if (index === -1) {
      setShowLocationModal(true); // true로 변경 직후 handler에 의해 값 변경
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <Container
          style={{backgroundColor: showFilterModal ? 'white' : 'white'}}>
          <FilterBanner
            navigation={navigation}
            filterStateHandler={filterStateHandler}
            locationStateHandler={locationStateHandler}
          />
          {/*<SectionTitle>인기 모임</SectionTitle>*/}
          <ScrollView>
            <PopularGroupsCard>
              {/*TODO: groupArr.map((group, index) => (*/}
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </PopularGroupsCard>
          </ScrollView>
        </Container>
        {(!showFilterModal || !showLocationModal) && (
          <View
            style={{
              position: 'absolute',
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              backgroundColor: 'black',
              opacity: 0.3,
              zIndex: 0,
            }}
          />
        )}
        {/*TODO: 필터 불러오기*/}
        <BottomSheetModal
          ref={FilterBottomSheetRef}
          index={1}
          snapPoints={filterSnapPoints}
          onChange={handleFilterSheetChanges}
          style={{
            backgroundColor: 'white', // <==== HERE
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 10,
            shadowRadius: 0,
            elevation: 20,
          }}>
          <FilterBottomSheet
            handleCloseModalPress={handlePressCloseFilterModal}
          />
        </BottomSheetModal>

        <BottomSheetModal
          ref={LocationBottomSheetRef}
          index={1}
          snapPoints={locationSnapPoints}
          onChange={handleLocationSheetChanges}
          style={{
            backgroundColor: 'white', // <==== HERE
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 50},
            shadowOpacity: 10,
            shadowRadius: 0,
            elevation: 20,
          }}>
          <LocationBottomSheet
            handleCloseModalPress={handlePressCloseLocationModal}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
