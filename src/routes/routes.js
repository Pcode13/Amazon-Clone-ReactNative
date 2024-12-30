// In App.js in a new project

import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Checkout from '../Screens/Checkout';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';

import {useStateValue} from '../Utilty/StateContext';
import {onAuthStateChanged} from 'firebase/auth';
import auth from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const RootStack = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [{basket}, dispatch] = useStateValue();

  function handleAuthStateChanged(user) {
    setUser(user);

    if (user) {
      console.log('user 1', user);
      dispatch({
        type: 'SET_USER',
        user: user,
      });
    } else {
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{headerShown: false}} // Hide header for tab navigation
      />
    </Stack.Navigator>
  );
};

export default RootStack;
