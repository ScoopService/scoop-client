import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import ProfileBanner from '../banners/ProfileBanner';
import DateBanner from '../banners/DateBanner';
import GroupCard from '../components/GroupCard';
import LogoTopBar from '../components/LogoTopBar';
import {HorizontalRule} from '../components/HorizontalRule';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FloatingAction} from 'react-native-floating-action';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/BottomTabsNavigator';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  background-color: white;
`;

const SectionTitle = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const MyGroupsCard = styled.View`
  //background-color: white;
  justify-content: center;
  align-items: center;
`;

const PopularGroupsCard = styled.View`
  //background-color: white;
  justify-content: center;
  align-items: center;
`;

const FABContainer = styled.View`
  position: absolute;
  bottom: 12px;
  right: 17px;
`;

const actions = [
  //TODO : 기능이 하나인 경우 빼기
  {
    text: '글쓰기',
    icon: require('../assets/images/basketball.png'),
    color: '#39CB51',
    name: 'bt_accessibility',
    position: 1,
  },
  {
    text: '모임 만들기',
    icon: require('../assets/images/Ellipse93.png'),
    color: '#39CB51',
    name: 'bt_language',
    position: 2,
  },
];

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const Home = ({navigation}:NavigationStackScreenProps) => {
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    //console.log('Home.tsx effect');
  }, []);

  return (
    <Container>
      {/*TODO : 상단바 스크롤 고정하기 */}
      <LogoTopBar  navigation={navigation}/>
      <ScrollView>
        <ProfileBanner nickname="블루비" />
        {/*<DateBanner />*/}
        <SectionTitle>다음 모임</SectionTitle>
        <MyGroupsCard>
          <GroupCard />
          {/*TODO : 유저 키 Props 전달하기 */}
        </MyGroupsCard>
        <HorizontalRule />
        <SectionTitle>인기 모임</SectionTitle>
        <PopularGroupsCard>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </PopularGroupsCard>
      </ScrollView>
      <FABContainer>
        <FloatingAction
          actions={actions}
          color={'#39CB51'}
          distanceToEdge={{vertical: 0, horizontal: 0}} //TODO : vertical pxs
          visible={true}
          // overlayColor={'rgba(127, 17, 224, 1)'}
          position={'right'}
          actionsPaddingTopBottom={6}
          iconWidth={20.8}
          iconHeight={20.8}
          buttonSize={52}
          listenKeyboard={true}
          dismissKeyboardOnPress={true}
          shadow={{
            shadowOpacity: 0.35,
            shadowOffset: {width: 0, height: 5},
            shadowColor: '#000000',
            shadowRadius: 3,
          }}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          // onOpen={}
        />
      </FABContainer>
    </Container>
  );
};
