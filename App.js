import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/routes/routes';
import {StateProvider, useStateValue} from './src/Utilty/StateContext'; // Import the context
import {reducer, initialState} from './src/Utilty/StateContext';


const App = () => {
 
  // console.log('User', user);
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
