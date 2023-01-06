import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { MyPage } from '../screens/MyPage';
import { GroupSearch } from '../screens/GroupSearch';
import { GroupFeed } from '../screens/GroupFeed';
import { MyGroups } from '../screens/MyGroups';
import { VectorIcon } from '../components/VectorIcon';


export const TabsNavigator = () => {
  return <AndroidTabs />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();


const AndroidTabs = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#59e73f'
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: 'colors.primary',
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({focused, color}) => {

          let iconName: any;
          switch (route.name) {
              case 'Tab1Screen':
              iconName = <VectorIcon name='apps' />
              break;

              case 'Tab2Screen':
              iconName = <VectorIcon name='logo-windows' />
              break;
              case 'Tab3Screen':
              iconName = <VectorIcon name='logo-windows' />
              break;
              case 'Tab4Screen':
              iconName = <VectorIcon name='logo-windows' />
              break;

          }
          return <Text>{iconName}</Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: '마이페이지' }} component={MyPage} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: '모임 찾기' }} component={GroupSearch} />
      <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: '모임 보기' }} component={GroupFeed} />
      <BottomTabAndroid.Screen name="Tab4Screen" options={{ title: '나의 모임' }} component={MyGroups} />
    </BottomTabAndroid.Navigator>
  );
}

