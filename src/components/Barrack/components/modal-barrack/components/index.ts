import styled from 'styled-components/native'

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

export const Image = styled.Image`
  width: 100%;
  max-height: 220px;
  margin-top: 45px;
  z-index: -1;
`

export const CloseIcon = styled.TouchableHighlight`
  position: absolute;
  right: 10px;
  top: 0px;
  width: 50px;
  height: 35px;
  align-items: flex-end;
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
  color: #beb4b4;
`

export const SectionItem = styled.View`
  display: flex;

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #d8d4d4;
  margin-bottom: 10px;
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
  background-color: #008e1f;

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
