import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import NavigationBar from './components/NavigationBar'
import Auth from './components/Auth'

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
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path={['/', '/login']} component={Auth} />
        <NavigationBar />
      </Switch>
    </Router>
  )
}

export default App
