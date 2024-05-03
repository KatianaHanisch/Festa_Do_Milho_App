import * as React from 'react'

import { BackHandler } from 'react-native'

import { Container } from './components'

import { StatusBar } from 'expo-status-bar'
import { Animated, Dimensions, Image, View } from 'react-native'

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'

export default function Map({ route, navigation }) {
  const backAction = () => {
    navigation.navigate('Home')
    return true
  }

  BackHandler.addEventListener('hardwareBackPress', backAction)

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#e5ebce" />

      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
      >
        <Animated.Image
          style={{ width: '100%', height: '80%' }}
          source={require('../../../assets/barracas.jpeg')}
        />
      </ReactNativeZoomableView>
    </Container>
  )
}
