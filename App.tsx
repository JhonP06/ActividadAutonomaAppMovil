import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Text } from 'react-native';
import React from 'react';
import { Navigation } from './screens/navegator/Navegation';


const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default App;