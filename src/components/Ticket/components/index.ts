import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`
export const Tck = styled.View`
  width: 100%;
  height: 110px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  background-color: #3f6b3e;
`

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d8d4d4;
  margin-bottom: 21px;
  margin-top: 21px;
`

export const TicketBody = styled.View`
  width: 75%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  border-right-width: 1px;
  border-right-color: #dfdfdf;
  border-style: dashed;
  padding: 7px 15px;
`
export const ContainerBarrack = styled.View`
  flex: 1;
  flex-direction: column;
`
export const CircularBorderTop = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background-color: #e5ebce;
  margin-left: -13px;
  margin-top: -13px;
`
export const CircularBorderButton = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background-color: #e5ebce;
  margin-bottom: -13px;
  margin-left: -13px;
`

export const Description = styled.Text`
  font-family: 'Archivo_700Bold_Italic';
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
`

export const Price = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 18px;
  color: #fff;
`

export const BarrackName = styled.Text`
  font-family: 'Archivo_400Regular_Italic';
  font-size: 14px;
  color: #fff;
  text-align: center;
  transform: rotate(90deg);
  text-transform: capitalize;
`

export const TicketTab = styled.View`
  display: flex;

  flex: 1;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 5px;
`

export const TicketDetails = styled.Modal`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  /* shadow-color: #000; */
  /* shadow-radius: 4px; */
  /* elevation: 5; */
`
