import { useEffect, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from './containers/Layout'

export const DocumentContext = createContext()

function App() {
  const [documents, setDocuments] = useState({})

  const saveDocumentToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getDocumentFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  const getDocument = (url) => {
    return import(url)
      .then(res => {
        setDocuments(prevState => ({ ...prevState, [url]: res.default }))
        saveDocumentToLocalStorage(url, res.default)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // Cargamos los documentos desde el localStorage al iniciar
    const loadedDocuments = {}
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('document_')) {
        loadedDocuments[key] = getDocumentFromLocalStorage(key)
      }
    })
    setDocuments(loadedDocuments)
  }, [])

  return (
    <DocumentContext.Provider value={{ documents, getDocument }}>
      <Layout>
        <Outlet />
      </Layout>
    </DocumentContext.Provider>
  )
}

export default App
