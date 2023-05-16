import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'

import Inicio from './screens/home'
import FoodMenu from './screens/food-menu'
import Barracks from './screens/barracks'
import Tickets from './screens/tickets'
import Map from './screens/map'

import { FontAwesome5 as FA5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'

export default function BottomRoutes() {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <StatusBar style="dark" />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: '#484848',
          tabBarStyle: {
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ color }) => {
              return <Fontisto name="home" size={28} color={color} />
            }
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={Map}
          options={{
            tabBarButton: () => null
          }}
        />
        <Tab.Screen
          name="Cardápio"
          component={FoodMenu}
          options={{
            tabBarIcon: ({ color }) => {
              return <Ionicons name="restaurant" size={28} color={color} />
            }
          }}
        />
        <Tab.Screen
          name="Barracas"
          component={Barracks}
          initialParams={{
            renderAllBarracks: true
          }}
          options={{
            tabBarIcon: ({ color }) => {
              return <FA5 name="store" color={color} size={26} />
            }
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{
            tabBarIcon: ({ color }) => {
              return <FontAwesome name="ticket" size={32} color={color} />
            }
          }}
        />
      </Tab.Navigator>
    </>
  )
}
