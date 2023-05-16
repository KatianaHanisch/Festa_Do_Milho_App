import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  /* background-color: #0b890b; */
`

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold_Italic';
  font-size: 18px;
  color: #f7fff7;
`

export const Subtitle = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 18px;
  color: #d9d9d9;
`
