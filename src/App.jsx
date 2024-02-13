import { useEffect, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './containers/Layout'
import { ObjectProvider } from './context/createObjectiveContext.jsx'

export const DocumentContext = createContext()

function App() {
  return (
    <ObjectProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ObjectProvider>
  )
}

export default App
