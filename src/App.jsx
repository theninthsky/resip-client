import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from './firebase'
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
  const [user] = useAuthState(firebase.auth())

  useEffect(() => {
    console.log(user)
  })

  return (
    <>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path={['/login', '/register']} component={Auth} />
        <NavigationBar />
      </Switch>
    </>
  )
}

export default App
