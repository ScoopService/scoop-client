import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, StyleProp, Text, ViewStyle} from 'react-native';
import {Home} from '../screens/Home';
import {GroupSearch} from '../screens/GroupSearch';
import {GroupFeed} from '../screens/GroupFeed';
import {MyPage} from '../screens/MyPage';
import {VectorIcon} from '../components/VectorIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypoicons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//사용하지 않음
export const MaterialTabsNavigator = () => {
  return <MaterialTabs />;
};

export const BottomTabsNavigator = () => {
  return <BottomTabs />;
};

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

//사용하지 않음
const MaterialTabs = () => {
  return (
    <MaterialBottomTabs.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#2af358',
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        tabBarIcon: ({focused, color}) => {
          let iconName: any;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = <VectorIcon name="apps" />;
              break;
            case 'Tab2Screen':
              iconName = <VectorIcon name="logo-windows" />;
              break;
            case 'Tab3Screen':
              iconName = <VectorIcon name="logo-windows" />;
              break;
            case 'Tab4Screen':
              iconName = <VectorIcon name="logo-windows" />;
              break;
          }
          return <Text>{iconName}</Text>;
        },
      })}>
      <MaterialBottomTabs.Screen
        name="Tab1Screen"
        options={{title: '홈'}}
        component={Home}
      />
      <MaterialBottomTabs.Screen
        name="Tab2Screen"
        options={{title: '모임 찾기'}}
        component={GroupSearch}
      />
      <MaterialBottomTabs.Screen
        name="Tab3Screen"
        options={{title: '모임 보기'}}
        component={GroupFeed}
      />
      <MaterialBottomTabs.Screen
        name="Tab4Screen"
        options={{title: '마이페이지'}}
        component={MyPage}
      />
    </MaterialBottomTabs.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'add'!;
          if (route.name === 'Home') {
            return <Entypoicons name={'home'} size={28} color={color} />;
          } else if (route.name === 'GroupSearch') {
            return <Ionicons name={'search'} size={28} color={color} />;
          } else if (route.name === 'GroupFeed') {
            return (
              <MaterialCommunityIcons
                name={'calendar-check'}
                size={28}
                color={color}
              />
            );
          } else if (route.name === 'MyPage') {
            iconName = focused ? 'person' : 'person-outline';
            return <Ionicons name={iconName} size={28} color={color} />;
          }
          // You can return any component that you like here!
          return <Ionicons name="add" size={size} color={color} />;
        },
        tabBarStyle: {height: 76},
        tabBarLabelStyle: {marginBottom: 13, fontSize: 10},
        tabBarIconStyle: {marginBottom: -5},
        tabBarActiveTintColor: '#39CB51',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        options={{title: '홈', headerShown: false}}
        component={Home}
      />
      <Tab.Screen
        name="GroupSearch"
        options={{title: '모임 찾기', headerShown: false}}
        component={GroupSearch}
      />
      <Tab.Screen
        name="GroupFeed"
        options={{title: '모임 보기', headerShown: false}}
        component={GroupFeed}
      />
      <Tab.Screen
        name="MyPage"
        options={{title: '마이페이지', headerShown: false}}
        component={MyPage}
      />
    </Tab.Navigator>
  );
};
