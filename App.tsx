import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TabsNavigator} from './src/navigator/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator/>
    </NavigationContainer>
  );
};

export default App;
