import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
  const wallpaperSrc = useProgressiveImg(wallpaperLQ, wallpaperHQ)

  return (
    <Router>
      <GlobalStyle wallpaperSrc={wallpaperSrc} />

      <Switch>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path={['/login', '/register']} component={Auth} />
        <NavigationBar />
      </Switch>
    </Router>
  )
}

export default App
