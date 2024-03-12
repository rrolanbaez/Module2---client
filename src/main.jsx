import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { PlansProvider } from './context/plans.context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <PlansProvider>
        <App />
      </PlansProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
