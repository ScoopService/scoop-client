import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {GroupSearch} from '../screens/GroupSearch';
import {GroupFeed} from '../screens/GroupFeed';
import {MyPage} from '../screens/MyPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypoicons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Notification} from '../screens/Notification';

type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
};

const HomeStack = createStackNavigator<RootStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <HomeStack.Screen
        name="Notifications"
        options={{headerShown: false}}
        component={Notification}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'add'!;
          if (route.name === 'HomeStack') {
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
        name="HomeStack"
        options={{title: '홈', headerShown: false}}
        component={HomeStackScreen}
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

export const BottomTabsNavigator = () => {
  return <BottomTabs />;
};
