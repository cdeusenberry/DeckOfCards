import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DeckScreen, HandScreen } from './src/features';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    < NavigationContainer>
      <Stack.Navigator initialRouteName='Deck'>
        <Stack.Screen name="Deck" component={DeckScreen} options={{ title: 'Deck' }} />
        <Stack.Screen name="Hand" component={HandScreen} options={{ title: 'Hand' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
