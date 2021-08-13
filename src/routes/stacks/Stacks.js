import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Details from 'scenes/details'
import BackButton from './BackButton'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.lightWhite },
  headerTitleStyle: { fontSize: 18, color: 'black' },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: '',
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: '',
        headerLeft: BackButton,
      }}
    />
  </Stack.Navigator>
)
