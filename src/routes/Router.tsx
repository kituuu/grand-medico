import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from '../screens/SplashScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Admin from '../screens/Admin';

const Stack = createNativeStackNavigator();

export const FirstVisit = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
  );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name='Admin' component={Admin} />
        </Stack.Navigator>
    );
}