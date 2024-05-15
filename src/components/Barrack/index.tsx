import React, { useState, useEffect } from 'react'
import { BackHandler } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableHighlight } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons'

import {
  Button,
  Container,
  Details,
  Title,
  Subtitle,
  Image,
  Row,
  Stars,
  Quantity,
  BarrackDetails,
  ContainerCardBarrack,
  ContainerImage,
  ImageBarraca
} from './components'

import ModalBarrack from './components/modal-barrack'

interface BarrackProps {
  navigation: any
  barrack: BarrackType
}

interface BarrackType {
  id: number
  nome: string
  curso: string
  cardapio: FoodMenuType
}

interface FoodMenuType {
  comidas: FoodType[]
  bebidas: DrinkType[]
}

interface FoodType {
  nome: string
  valor: number
}

interface DrinkType {
  nome: string
  valor: number
}

export default function Barrack({ navigation, barrack }: BarrackProps) {
  const [barrackDetailsOpen, setBarrackDetailsOpen] = useState(false)

  let image

  switch (barrack.id) {
    case 1:
      image = (
        <Image source={require('../../../assets/barracks_images/1.png')} />
      )
      break
    case 2:
      image = (
        <Image source={require('../../../assets/barracks_images/2.png')} />
      )
      break
    case 3:
      image = (
        <Image source={require('../../../assets/barracks_images/3.png')} />
      )
      break
    case 4:
      image = (
        <Image source={require('../../../assets/barracks_images/4.png')} />
      )
      break
    case 5:
      image = (
        <Image source={require('../../../assets/barracks_images/5.png')} />
      )
      break
    // case 6:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/6.jpg')} />
    //   )
    //   break
    case 7:
      image = (
        <Image source={require('../../../assets/barracks_images/7.png')} />
      )
      break
    case 8:
      image = (
        <Image source={require('../../../assets/barracks_images/8.png')} />
      )
      break
    // case 9:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/9.jpg')} />
    //   )
    //   break
    case 10:
      image = (
        <Image source={require('../../../assets/barracks_images/10.png')} />
      )
      break
    case 11:
      image = (
        <Image source={require('../../../assets/barracks_images/11.png')} />
      )
      break
    // case 12:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/12.png')} />
    //   )
    //   break
    // case 13:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/13.png')} />
    //   )
    //   break
    case 14:
      image = (
        <Image source={require('../../../assets/barracks_images/14.png')} />
      )
      break
    case 15:
      image = (
        <Image source={require('../../../assets/barracks_images/15.png')} />
      )
      break
    case 16:
      image = (
        <Image source={require('../../../assets/barracks_images/16.png')} />
      )
      break
    case 17:
      image = (
        <Image source={require('../../../assets/barracks_images/17.png')} />
      )
      break
    // case 18:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/18.png')} />
    //   )
    //   break
    // case 19:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/19.jpg')} />
    //   )
    //   break
    // case 20:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/20.png')} />
    //   )
    //   break
    case 21:
      image = (
        <Image source={require('../../../assets/barracks_images/21.png')} />
      )
      break
    case 22:
      image = (
        <Image source={require('../../../assets/barracks_images/22.png')} />
      )
      break
    case 23:
      image = (
        <Image source={require('../../../assets/barracks_images/23.png')} />
      )
      break
    case 24:
      image = (
        <Image source={require('../../../assets/barracks_images/24.png')} />
      )
      break
    // case 25:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/25.png')} />
    //   )
    //   break
    // case 26:
    //   image = (
    //     <Image source={require('../../../assets/barracks_images/26.jpg')} />
    //   )
    //   break
    case 27:
      image = (
        <Image source={require('../../../assets/barracks_images/27.png')} />
      )
      break
    case 28:
      image = (
        <Image source={require('../../../assets/barracks_images/28.png')} />
      )
      break
    case 29:
      image = (
        <Image source={require('../../../assets/barracks_images/29.png')} />
      )
      break
    case 30:
      image = (
        <Image source={require('../../../assets/barracks_images/30.png')} />
      )
      break

    default:
      break
  }

  const backAction = () => {
    navigation.navigate('Cardápio')
    return true
  }

  BackHandler.addEventListener('hardwareBackPress', backAction)

  return (
    <ContainerCardBarrack>
      <LinearGradient
        colors={['#005204', '#214320']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0.9, y: 0 }}
        locations={[0.1, 0.9]}
        style={{ flex: 1, borderRadius: 8 }}
      >
        <TouchableHighlight
          underlayColor="none"
          accessibilityRole="link"
          onPress={() => setBarrackDetailsOpen(true)}
        >
          <Container>
            <Row>
              <ContainerImage>{image}</ContainerImage>
              <Details>
                <Title>{barrack.nome}</Title>
                <Subtitle>{barrack.curso}</Subtitle>
              </Details>
            </Row>
            <Entypo name="chevron-thin-right" color="#d9d9d9" size={20} />

            {/* <Stars>
          <FA5 name="star" color="#484848" size={28} />
          <Quantity>{barrack.stars}</Quantity>
        </Stars> */}

            <BarrackDetails
              animationType="slide"
              transparent={false}
              visible={barrackDetailsOpen}
              onRequestClose={() => {
                setBarrackDetailsOpen(false)
              }}
            >
              <ModalBarrack
                navigation={navigation}
                barrack={barrack}
                setBarrackDetailsOpen={setBarrackDetailsOpen}
              />
            </BarrackDetails>
          </Container>
        </TouchableHighlight>
      </LinearGradient>
    </ContainerCardBarrack>
  )
}
