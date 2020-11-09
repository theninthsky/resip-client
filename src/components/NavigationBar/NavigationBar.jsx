import styled from 'styled-components'

import firebase from '../../firebase'
import { LOGOUT } from './constants'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fdffe8;
`
const Logo = styled.div`
  font-size: 26px;
`
const Logout = styled.button``

const NavigationBar = () => {
  return (
    <Wrapper>
      <Logo>Resip</Logo>
      <Logout onClick={() => firebase.auth().signOut()}>{LOGOUT}</Logout>
    </Wrapper>
  )
}

export default NavigationBar
