import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
