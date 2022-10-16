import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import GlobalStyle from './assets/style/global'
import { theme } from './assets/style/theme'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
)
