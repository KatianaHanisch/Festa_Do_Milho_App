import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import {
  Container,
  TicketBody,
  Line,
  TicketTab,
  Tck,
  Description,
  Price,
  BarrackName,
  TicketDetails,
  CircularBorderTop,
  CircularBorderButton,
  ContainerBarrack
} from './components'
import ModalTicketDetails from '../../screens/tickets/modal-ticket-details'

import { TouchableHighlight } from 'react-native-gesture-handler'

interface TicketProps {
  navigation: any
  ticket: TicketType
  readonly?: boolean
  uploadPage: any
}

interface TicketType {
  descricao: string
  valor: number
  barraca: string
  id_barraca: number
}

export default function Ticket({
  navigation,
  ticket,
  readonly,
  uploadPage
}: TicketProps) {
  const [modalTicketDetailsOpen, setModalTicketDetailsOpen] =
    React.useState(false)

  const closeModal = () => {
    setModalTicketDetailsOpen(false)
    uploadPage(true)
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#EFF1ED" translucent={false} />
      <TouchableHighlight
        key={ticket.descricao}
        underlayColor="none"
        onPress={() => {
          !readonly && setModalTicketDetailsOpen(true)
        }}
      >
        <Container>
          <Tck>
            <LinearGradient
              colors={['#008E1F', '#3F6B3E']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              locations={[0.1, 0.9]}
              style={{ flex: 1, flexDirection: 'row', borderRadius: 8 }}
            >
              <TicketBody>
                <Description>{ticket.descricao}</Description>

                <Price>
                  {Number(ticket.valor).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Price>
              </TicketBody>

              <ContainerBarrack>
                <CircularBorderTop />
                <TicketTab>
                  <BarrackName>{ticket.barraca}</BarrackName>
                </TicketTab>
                <CircularBorderButton />
              </ContainerBarrack>

              <TicketDetails
                animationType="slide"
                transparent={false}
                visible={modalTicketDetailsOpen}
                onRequestClose={() => {
                  closeModal
                }}
              >
                <ModalTicketDetails
                  navigation={navigation}
                  ticket={ticket}
                  setModalTicketDetailsOpen={closeModal}
                />
              </TicketDetails>
            </LinearGradient>
          </Tck>
          <Line />
        </Container>
      </TouchableHighlight>
    </>
  )
}
