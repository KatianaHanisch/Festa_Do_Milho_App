import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 20px;

  ${Platform.OS === 'ios' ? 'height: 55px' : 'height: 45px'}
`

export const ContainerIcone = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  text-align: left;

  color: #313233;
`
export const BarrackDetails = styled.Modal`
  margin: 20px;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
`
export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 45px;
  align-items: flex-end;
  justify-content: center;
`
