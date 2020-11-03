import React from 'react'
import { createGlobalStyle } from 'styled-components'

import NavigationBar from './components/NavigationBar'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  img {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    &:visited {
      color: unset;
    }
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
    </>
  )
}

export default App
