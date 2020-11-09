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
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <>
      <GlobalStyle />

      <If condition={!loading && !user}>
        <Auth />
      </If>

      <If condition={loading || user}>
        <NavigationBar />

        <Switch></Switch>
      </If>
    </>
  )
}

export default App
