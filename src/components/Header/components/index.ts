import styled from 'styled-components/native'

export const Container = styled.View`
  height: 40px;
  width: 100%;

  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  text-align: left;

  color: #313233;
`
export const BarrackDetails = styled.Modal`
  margin: 20px;
  background-color: red;
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
