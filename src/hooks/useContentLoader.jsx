import { useContext, useEffect, useState } from 'react'
import { FilterVersionContext } from '../context/createObjectiveContext'

function useContentLoader(initialVersion = 'v1') {
  const [version, setVersion] = useState(initialVersion)
  // const {version, setVersion} = useContext(FilterVersionContext)

  const getDocument = async (url) => {
    try {
      const res = await import(url)
      console.log(res.default)
    } catch (err) {
      console.log(err)
    }
  }

  const getDocuments = (list) => {
    list.forEach((url) => getDocument(url))
  }

  const getContentWeb = () => {
    import(`../content.json`)
      .then(res => {
        const libraryContent = res.default.framework
        const docsLibrary = libraryContent.docs[version]
        // console.log(docsLibrary)
        getDocuments(Object.values(libraryContent.docs))
        getDocument(docsLibrary)

      })
      .catch(err => console.log(err))
  }

  useEffect(() => getContentWeb(), [version])

  return {
    version,
    setVersion,
  }
}

export default useContentLoader
