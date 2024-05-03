import * as React from 'react'
import { FontAwesome5 as FA5 } from '@expo/vector-icons'

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
  NpdImage,
  ContainerImagens,
  CloseIcon,
  ContainerInterno,
  TextBold
} from './components'

import { StatusBar } from 'expo-status-bar'

interface AboutScreenProps {
  setBarrackDetailsOpen: (value: boolean) => void
}

export default function About({ setBarrackDetailsOpen }: AboutScreenProps) {
  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#EFF1ED" translucent={false} />

      <ContainerInterno>
        <CloseIcon
          onPress={() => setBarrackDetailsOpen(false)}
          underlayColor="none"
        >
          <FA5 name="times-circle" color="#495057" size={28} />
        </CloseIcon>

        <TextInitial>
          A <TextBold>Festa do Milho UNIFASIPE</TextBold> chega na sua 17º
          edição, sendo considerada o maior evento gastronômico de Sinop e
          região.
        </TextInitial>
        <TextSecondary>
          Ela surgiu como uma atividade do curso de Administração da
          instituição, e ainda mantem seu objetivo que é fomentar o
          empreendedorismo, além de demonstrar à sociedade em geral, as
          qualidades nutricionais do milho.
        </TextSecondary>

        <Line />

        <DevelopedBy>
          Aplicativo desenvolvido pelo curso de Análise e Desenvolvimento de
          Sistemas em parceria com o Núcleo de Pesquisa e Desenvolvimento.
        </DevelopedBy>

        <ContainerImagens>
          <CourseImage source={require('../../../../../assets/ads.png')} />
          <NpdImage source={require('../../../../../assets/npd.png')} />
        </ContainerImagens>
      </ContainerInterno>
    </Container>
  )
}
