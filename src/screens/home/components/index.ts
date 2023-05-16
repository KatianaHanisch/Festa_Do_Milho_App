import styled from 'styled-components/native'

interface MenuBottomProps {
  readonly spaced?: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff1ed;
`

export const Image = styled.Image`
  width: 281px;
  height: 140px;

  margin-bottom: 40px;
`

export const Menu = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MenuButton = styled.View<MenuBottomProps>`
  background-color: #0b890b;
  color: #f7fff7;
  border-radius: 5px;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-bottom: ${(props) => (props.spaced ? '80px' : '18px')};
`

export const MenuButtonText = styled.Text`
  font-family: 'Poppins_700Bold_Italic';
  color: #f7fff7;
  font-size: 24px;
  margin-right: 14px;
  padding: 0;
`
