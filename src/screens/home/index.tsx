import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Container,
  Image,
  MenuButtonText,
  Menu,
  MenuButton
} from './components'
import { TouchableHighlight } from 'react-native'

export default function Home({ navigation }: any) {
  return (
    <Container>
      <Image source={require('../../../assets/logo.png')} />

      <Menu>
        <TouchableHighlight
          underlayColor="none"
          onPress={() => navigation.navigate('Map')}
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
