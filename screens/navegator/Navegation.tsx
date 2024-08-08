import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1Screens from '../pantallas/Pantalla1Screens';

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Pantalla2Screens } from '../pantallas/Pantalla2Screens';

const Stack = createStackNavigator();

export const  Navigation = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerStyle:{
                backgroundColor:'#cdf2f5',
            },
            
            cardStyle:{
                backgroundColor:'#b9f1f5'
            }
        }}>
        <Stack.Screen name="HOME" options={{headerShown:false}} component={Pantalla1Screens} />
        <Stack.Screen name="FORMULARIO" component={Pantalla2Screens} />
    </Stack.Navigator>
  );
}