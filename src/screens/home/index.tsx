import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  Image,
  MenuButtonText,
  Menu,
  MenuButton
} from './components'
import { Linking, TouchableHighlight, View } from 'react-native'

export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={require('../../../assets/logo.png')} />

      <Menu>
        <TouchableHighlight
          underlayColor="none"
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/file/d/1TPoTkAyViKmGs4TrsbjEoIT-uerIDyqr/view?usp=sharing'
            )
          }
        >
          <MenuButton>
            <MenuButtonText>Mapa</MenuButtonText>
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Cardápio')}
        >
          <MenuButton>
            <MenuButtonText>Cardápio</MenuButtonText>
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Barracas')}
        >
          <MenuButton>
            <MenuButtonText>Barracas</MenuButtonText>
          </MenuButton>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Tickets')}
        >
          <MenuButton>
            <MenuButtonText>Tickets</MenuButtonText>
          </MenuButton>
        </TouchableHighlight>
      </Menu>
      <StatusBar style="dark" translucent={true} />
    </Container>
  )
}
