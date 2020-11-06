import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import NavigationBar from './components/NavigationBar'
import Auth from './components/Auth'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
  }

  img {
    user-select: none;
  }

  #root {
    overflow: auto;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path={['/login', '/register']} component={Auth} />
        <NavigationBar />
      </Switch>
    </Router>
  )
}

export default App
