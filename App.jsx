import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/homeScreen';
import Inscription from './src/screens/inscription/inscriptionScreen';
import Profil from './src/screens/profil/profilScreen';
import Shop from './src/screens/shop/shopScreen';
import Panier from './src/screens/panier/panierScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function App() {

  
  const AppTabMenu = useCallback(() => (
    <Tab.Navigator initialRouteName='home' >
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='inscription' component={Inscription} />
      <Tab.Screen name='profil' component={Profil} />
      <Tab.Screen name='shop' component={Shop} />
      <Tab.Screen name='panier' component={Panier} />

    </Tab.Navigator>
  ), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "44c2a3" }}>
      <StatusBar
        backgroundColor={styles.statusBar.backgroundColor}
      />
      <NavigationContainer>
      <Stack.Navigator initialRouteName='menu'>
        <Stack.Screen
          name='menu'
          component={AppTabMenu}
          options={{
            headerShown: false
          }} />

      
      </Stack.Navigator>
</NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#44c2a3'
  },
});

export default App;