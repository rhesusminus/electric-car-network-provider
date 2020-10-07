import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { App, Layout } from './components'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
