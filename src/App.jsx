import { useEffect, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './containers/Layout'

export const DocumentContext = createContext()

function App() {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
