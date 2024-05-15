import React from 'react'

import { TouchableHighlight } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

import { Entypo } from '@expo/vector-icons'

import { Container, Details, Title, Subtitle } from './components'

interface FoodMenuItemProps {
  food: FoodType
  navigation: any
}

interface FoodType {
  nome: string
  barracas: FoodBarracksProps[]
}

interface FoodBarracksProps {
  id_barraca: number
}

export default function FoodMenuItem({ food, navigation }: FoodMenuItemProps) {
  let barracas: number[] = []

  food.barracas.map((barrack) => barracas.push(barrack.id_barraca))

  const foodModel = {
    nome: food.nome,
    barracas
  }

  return (
    <TouchableHighlight
      underlayColor="none"
      onPress={() =>
        navigation.navigate('Barracas', {
          props: { filteredBarracks: foodModel.barracas }
        })
      }
    >
      <LinearGradient
        colors={['#005204', '#214320']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.1, 0.9]}
        style={{
          flex: 1,
          flexDirection: 'row',
          borderRadius: 8,
          marginBottom: 12
        }}
      >
        <Container>
          <Details>
            <Title>{food.nome}</Title>
            <Subtitle>
              {food.barracas.length}
              {food.barracas.length > 1 ? ' barracas' : ' barraca'}
            </Subtitle>
          </Details>

          <Entypo name="chevron-thin-right" color="#d9d9d9" size={20} />
        </Container>
      </LinearGradient>
    </TouchableHighlight>
  )
}
