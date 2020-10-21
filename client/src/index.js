import React from 'react'
import ReactDOM from 'react-dom'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Router } from '@reach/router'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { LandingPage, Home, Layout, StationDetails } from './components'
import './styles/index.css'

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <LandingPage path="/" />
            <Home path="/home" />
            <StationDetails path="/station/:stationId" />
          </Router>
        </Layout>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
