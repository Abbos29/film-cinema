import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './Layout/Header/Header'

const App = () => {

  const routing = useRoutes(routes)

  return (
    <>
      <Header />
      {routing}

    </>
  )
}

export default App