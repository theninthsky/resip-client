import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import App from './components/App'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
