import styled from 'styled-components'

const Wrapper = styled.nav`
  height: 50px;
  background-color: rebeccapurple;
`

const Logo = styled.div`
  font-size: 26px;
  color: white;
`

const NavigationBar = () => {
  return (
    <Wrapper>
      <Logo>Resip</Logo>
    </Wrapper>
  )
}

export default NavigationBar
