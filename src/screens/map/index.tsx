import * as React from 'react'

import { BackHandler } from 'react-native'

import Feather from '@expo/vector-icons/Feather'

import { Container, ContainerIcon } from './components'

import { StatusBar } from 'expo-status-bar'
import { Animated, Dimensions, Image, View } from 'react-native'

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'

export default function Map({ navigation }: any) {
  const backAction = () => {
    navigation.navigate('Home')
    return true
  }

  BackHandler.addEventListener('hardwareBackPress', backAction)

  const handleBack = () => {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#e5ebce" />
      <ContainerIcon onPress={() => handleBack()}>
        <Feather name="arrow-left" size={30} color="#313233" />
      </ContainerIcon>
      <ReactNativeZoomableView
        maxZoom={2.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        style={{
          width: '100%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Animated.Image
          style={{
            width: '100%',
            height: '68 %'
          }}
          source={require('../../../assets/barracas.png')}
          resizeMode="cover"
        />
      </ReactNativeZoomableView>
    </Container>
  )
}
