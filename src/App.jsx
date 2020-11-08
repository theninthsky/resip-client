import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import NavigationBar from './components/NavigationBar'
import Auth from './components/Auth'
import { useProgressiveImg } from './hooks'

import wallpaperLQ from './images/wallpaper-lq.jpg'
import wallpaperHQ from './images/wallpaper-hq.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    background: ${({ wallpaperSrc }) => `url(${wallpaperSrc}) no-repeat fixed`};
    background-size: cover;
  }

  img {
    user-select: none;
  }

  #root {
    overflow: auto;
  }
`

const App = () => {
  const { pathname } = useLocation()
  const [wallpaperSrc] = useProgressiveImg(wallpaperLQ, wallpaperHQ)

  return (
    <>
      <GlobalStyle wallpaperSrc={pathname === '/login' || pathname === '/register' ? wallpaperSrc : ''} />

      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path={['/login', '/register']} component={Auth} />
        <NavigationBar />
      </Switch>
    </>
  )
}

export default App
