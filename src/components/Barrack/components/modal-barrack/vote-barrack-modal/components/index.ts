import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 20px;
  background-color: #eff1ed;
`

export const Image = styled.Image`
  width: 100%;
  max-height: 300px;
  margin: 0px auto;
  z-index: -1;
  resize-mode: contain;
  margin-top: -10px;
`

export const CloseIcon = styled.TouchableHighlight`
  position: absolute;
  right: 5px;
  width: 50px;
  height: 40px;
  align-items: flex-end;
  justify-content: center;

  ${Platform.OS === 'ios' ? ' top: 35px' : ''}
`

export const Title = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 32px;
  color: #393d3f;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 55px;
`

export const FormInvalid = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: red;
  text-align: center;
  margin-bottom: 25px;
`

export const FormValid = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 20px;
  color: #008e1f;
  text-align: center;
  margin-bottom: 25px;
`

export const AlreadyVoted = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 20px;
  color: #008e1f;
  text-align: center;
  margin-bottom: 25px;
`

export const AfterVoteInformation = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ClaimTicket = styled.TouchableHighlight`
  width: 100%;
  height: 62px;
  background-color: #005204;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  margin: 0 auto;
`

export const Button = styled.TouchableHighlight`
  width: 100%;
  height: 62px;
  background-color: #005204;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  margin: 0 auto;
`

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 20px;
  color: #fff;
`

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 10px 0 26px;
  /* background-color: red; */
`

export const Input = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 20px;

  background-color: #e5e5e5;
  border-radius: 5px;

  margin-bottom: 12px;
`

export const TextArea = styled.TextInput`
  font-family: Archivo_700Bold;
  color: #5f5f5f;
  font-size: 18px;
  width: 80%;
`

export const Information = styled.Text`
  color: #8d8d8d;
  font-size: 18px;
  text-align: center;
  /* margin-top: 10px; */
  margin-bottom: 10px;
`

export const SwitchInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 40px 0;
`

export const AlreadyIsStudent = styled.Text`
  font-family: Archivo_700Bold;
  color: #5f5f5f;
  font-size: 18px;
`
