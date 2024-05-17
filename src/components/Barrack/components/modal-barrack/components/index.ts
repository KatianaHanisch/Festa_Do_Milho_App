import styled from 'styled-components/native'

import { Platform } from 'react-native'

export const OutsideContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Container = styled.ScrollView`
  flex: 0.925;
  display: flex;
  flex-direction: column;
  height: 80%;
  background-color: #eff1ed;
  padding: 20px 20px 20px 20px;
  margin-bottom: 55px;
`

export const ContainerImage = styled.View`
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
`
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  right: 5px;

  width: 50px;
  height: 35px;
  align-items: flex-end;
  justify-content: center;
  z-index: 999;
  ${Platform.OS === 'ios' ? ' top: 35px' : ''}
`

export const Title = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 32px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
  color: #393d3f;
  text-transform: capitalize;
`

export const Section = styled.View`
  display: flex;
  flex-direction: column;
  margin: 17px 0;
`

export const Description = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 18px;
  color: #717171;
`

export const SectionItem = styled.View`
  display: flex;

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 5px 0;
`

export const ItemText = styled.Text`
  font-family: Archivo_700Bold_Italic;
  font-size: 18px;
  color: #484848;
  padding: 8px 0;
  max-width: 70%;
  text-transform: capitalize;
`

export const VoteFooter = styled.View`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  width: 100%;

  padding: 20px 0;
`

export const Button = styled.TouchableHighlight`
  width: 300px;
  height: 52px;
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

export const BarrackVoteModal = styled.Modal`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
`
export const Linha = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d8d4d4;
`
