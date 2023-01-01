import React from 'react';

import {Button, Text, View} from 'react-native';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type profileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
type feedProps = NativeStackScreenProps<RootStackParamList, 'Feed'>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({navigation}: homeProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Feed" component={FeedScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
