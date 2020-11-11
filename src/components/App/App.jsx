import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from '../../firebase'
import Auth from '../Auth'
import NavigationBar from '../NavigationBar'
import If from '../If'

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
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <Router>
      <GlobalStyle />

      <If condition={!loading && !user}>
        <Auth />
      </If>

      <If condition={loading || user}>
        <NavigationBar />

        <Switch></Switch>
      </If>
    </Router>
  )
}

export default App
