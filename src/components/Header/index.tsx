import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

import ModalAbout from './components/ModalAbout'

import { Container, Title, BarrackDetails, Button } from './components'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const [barrackDetailsOpen, setBarrackDetailsOpen] = useState(false)

  return (
    <Container>
      <Title>{title}</Title>
      <Button
        accessibilityRole="link"
        onPress={() => setBarrackDetailsOpen(true)}
      >
        <Ionicons name="information-circle-outline" size={35} color="#313233" />
        <BarrackDetails
          animationType="slide"
          transparent={false}
          visible={barrackDetailsOpen}
          onRequestClose={() => {
            setBarrackDetailsOpen(false)
          }}
        >
          <ModalAbout setBarrackDetailsOpen={setBarrackDetailsOpen} />
        </BarrackDetails>
      </Button>
    </Container>
  )
}
