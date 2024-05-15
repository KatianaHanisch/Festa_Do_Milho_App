import * as React from 'react'

import Header from '../../components/Header'

import {
  Container,
  Line,
  Hour,
  User,
  YourTicketInformationText,
  YourTicketInformationTitle,
  ContainerTicket
} from './components'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  Button,
  ButtonText,
  NeedingVote
} from './modal-ticket-details/components'

import { ticket as tickets } from '../../../assets/barracks.json'
import Ticket from '../../components/Ticket'
import { StatusBar } from 'expo-status-bar'

interface TicketsScreenProps {
  route: any
  navigation: any
}

interface UserPayloadType {
  id: string
  name: string
  fone: string
  aluno: string
  tickets: UserPayloadTicketsType
}

interface UserPayloadTicketsType {
  hora: string
  id_barraca: number
}

interface TicketType {
  id_barraca: number
  barraca: string
  descricao: string
  valor: number
}

export default function Tickets({ navigation }: TicketsScreenProps) {
  const [userPayload, setUserPayload] = React.useState<UserPayloadType | null>(
    null
  )

  const [userTickets, setUserTickets] = React.useState<TicketType | null>(null)
  const [limitHour, setLimitHour] = React.useState('')
  const [day, setDay] = React.useState('')

  const [uploadPage, setUploadPage] = React.useState(false)

  navigation.addListener('focus', () => {
    verifyIfUserAlreadyVote()
  })

  const verifyIfUserAlreadyVote = async (): Promise<void> => {
    const payload = await AsyncStorage.getItem('@VOTE_PAYLOAD')

    if (!payload) {
      setUserPayload(null)
      return
    }

    const payloadParsed = JSON.parse(payload)

    if (payloadParsed.tickets) {
      const ticket = tickets.filter(
        (ticket) => ticket.id_barraca === payloadParsed.tickets[0].id_barraca
      )[0]
      setLimitHour(payloadParsed.tickets[0].hora)
      setDay(payloadParsed.tickets[0].dia)
      setUserTickets(ticket)
    }

    setUserPayload(payloadParsed)
  }

  React.useEffect(() => {
    verifyIfUserAlreadyVote()
  }, [uploadPage])

  return (
    <Container>
      <StatusBar style="dark" backgroundColor="#EFF1ED" translucent={false} />

      <Header title="Tickets" />

      {userPayload ? (
        userTickets ? (
          <>
            <User>{userPayload.name}</User>

            <YourTicketInformationTitle>
              VOCÊ POSSUI UM TICKET RESGATADO
            </YourTicketInformationTitle>
            <ContainerTicket>
              <Line />
              <Ticket
                navigation={navigation}
                ticket={userTickets}
                readonly
                uploadPage={setUploadPage}
              />
            </ContainerTicket>

            <YourTicketInformationText>
              RESGATE O SEU PRODUTO ATÉ:
            </YourTicketInformationText>
            {/* <Button onPress={() => getdeviceId()}>
              <ButtonText>SELECIONAR</ButtonText>
            </Button> */}

            <Hour>
              {limitHour.split(':')[0] + ':' + limitHour.split(':')[1]}
            </Hour>

            <Hour>{day}</Hour>
          </>
        ) : (
          tickets.map((ticket) => (
            <Ticket
              navigation={navigation}
              ticket={ticket}
              key={ticket.descricao}
              uploadPage={setUploadPage}
            />
          ))
        )
      ) : (
        <>
          <NeedingVote>
            Para poder resgatar tickets você deve votar em alguma barraca.
          </NeedingVote>

          <Button
            underlayColor="none"
            onPress={() => navigation.navigate('Barracas')}
          >
            <ButtonText>SELECIONAR BARRACA</ButtonText>
          </Button>
        </>
      )}
      <StatusBar style="dark" translucent={true} />
    </Container>
  )
}
