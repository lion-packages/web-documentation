import { createContext, useState } from 'react'

export const FilterVersionContext = createContext()

export const ObjectProvider = ({ children }) => {
  const [version, setVersion] = useState({
    version: 'v1',
  })

  return (
    <FilterVersionContext.Provider value={{
      version,
      setVersion
    }}>
      {children}
    </FilterVersionContext.Provider>
  )
}
