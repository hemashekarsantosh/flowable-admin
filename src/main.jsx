import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx'
import Instance from './components/Instance.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DeploymentInfo from './components/DeploymentInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
   
      <Router>
        <Header />
        <Routes>
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/instance" element={<Instance />} />
          <Route exact path="/deploymentInfo" element={<DeploymentInfo />} />
        </Routes>
      </Router>
     
    </ChakraProvider>
  </React.StrictMode>,
)
