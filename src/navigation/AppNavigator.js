import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {color} from '../constants/color';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Leagues from '../screens/Leagues';
import Research from '../screens/Research';
import Leaderboard from '../screens/Leaderboard';
import Profile from '../screens/Profile';

const Bottom = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator
      
        screenOptions={{
          tabBarActiveTintColor: color.primaryColor,
          tabBarInactiveTintColor: color.grayColor,
        }}>
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/icons/home.png')}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: tabInfo.focused
                      ? color.primaryColor
                      : color.grayColor,
                  }}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Leagues"
          component={Leagues}
          options={{
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/icons/leagues.png')}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: tabInfo.focused
                      ? color.primaryColor
                      : color.grayColor,
                  }}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Research"
          component={Research}
          options={{
            tabBarStyle: {
              height: 60,
              fontWeight: '600',
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/icons/search.png')}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: tabInfo.focused
                      ? color.primaryColor
                      : color.grayColor,
                  }}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/icons/leaderboard.png')}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: tabInfo.focused
                      ? color.primaryColor
                      : color.grayColor,
                  }}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="User"
          component={Profile}
          options={{
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
            },
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <Image
                  source={require('../assets/icons/user.png')}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: tabInfo.focused
                      ? color.primaryColor
                      : color.grayColor,
                  }}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
