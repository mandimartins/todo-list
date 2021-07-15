import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomItem from '../pages/CustomItem';
import Home from '../pages/Home';
import Options from '../pages/Options';

import Colors from '../constants/colors';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.tertiary,
          },
          headerTintColor: Colors.secondary,
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={CustomItem} />
        <Stack.Screen name="Options" component={Options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
