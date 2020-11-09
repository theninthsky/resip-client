import { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from './firebase'
import NavigationBar from './components/NavigationBar'
import Auth from './components/Auth'
import If from './components/If'

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

      <If condition={!user}>
        <Auth />
      </If>

      <If condition={user}>
        <NavigationBar />

        <Switch></Switch>
      </If>
    </>
  )
}

export default App
