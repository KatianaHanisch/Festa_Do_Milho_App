import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #e5ebce;
  padding: 30px 20px 10px 20px;
`

export const Search = styled.View`
  background-color: #ffffff;
  color: #787070;
  border-radius: 5px;
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 15px;
  margin-bottom: 25px;
`

export const Input = styled.TextInput`
  width: 230px;
  padding: 8px;

  font-family: 'Archivo_700Bold_Italic';
  font-size: 18px;

  color: #787070;
`

export const BarracksMenu = styled.ScrollView`
  flex: 1;
`
