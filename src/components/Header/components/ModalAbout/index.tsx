import * as React from 'react'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'

// import Header from '../../components/Header'

import {
  Button,
  ButtonText,
  Container,
  DevelopedBy,
  Line,
  TextInitial,
  TextSecondary,
  TextCenter,
  CourseImage,
  CloseIcon
} from './components'

import { StatusBar } from 'expo-status-bar'
import { Linking } from 'react-native'

interface AboutScreenProps {
  setBarrackDetailsOpen: (value: boolean) => void
}

export default function About({ setBarrackDetailsOpen }: AboutScreenProps) {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" backgroundColor="#EFF1ED" translucent={false} />

      <CloseIcon
        onPress={() => setBarrackDetailsOpen(false)}
        underlayColor="none"
      >
        <FA5 name="times-circle" color="#495057" size={28} />
      </CloseIcon>

      <TextInitial>
        A Festa do Milho UNIFASIPE chega na sua 16º edição, sendo considerada o
        maior evento gastronômico de Sinop e região.
      </TextInitial>
      <TextSecondary>
        Ela surgiu como uma atividade do curso de Administração da instituição,
        e ainda mantem seu objetivo que é fomentar o empreendedorismo, além de
        demonstrar à sociedade em geral, as qualidades nutricionais do milho.
      </TextSecondary>

      <Line />

      <DevelopedBy>
        Aplicativo desenvolvido pelo curso de Análise e Desenvolvimento de
        Sistemas da UNIFASIPE
      </DevelopedBy>

      <CourseImage source={require('../../../../../assets/ads.png')} />
    </Container>
  )
}
