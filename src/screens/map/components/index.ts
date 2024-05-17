import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 5px;
  height: 100%;
  background-color: #e5ebce;
  flex-direction: column;
`

export const ContainerIcon = styled.TouchableOpacity`
  width: 40px;
  height: 35px;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
  top: 45px;
  left: 10px;
  z-index: 999;
`
