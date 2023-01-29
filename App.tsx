import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabsNavigator} from './src/navigator/BottomTabsNavigator';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
