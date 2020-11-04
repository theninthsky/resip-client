import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

// import NavigationBar from './components/NavigationBar'
import Auth from './components/Auth'

import wallpaper from './images/wallpaper.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: url(${wallpaper}) no-repeat fixed;
    background-size: cover;
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
    <Router>
      <GlobalStyle />
      {/* <NavigationBar /> */}
      <Route path="/login">
        <Auth />
      </Route>
    </Router>
  )
}

export default App
