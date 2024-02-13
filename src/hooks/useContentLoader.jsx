import { useEffect, useState } from 'react'

function useContentLoader(initialVersion = 'v1') {
  const [version, setVersion] = useState(initialVersion)

  const getDocument = (url) => {
    return import(url)
      .then(res => {
        console.log(res.default)
        const dataDcos = res.default
      })
      .catch(err => console.log(err))
  }

  const getDocuments = (list) => {
    list.forEach((url) => getDocument(url))
  }

  const getContentWeb = () => {
    import(`../content.json`)
      .then(res => {
        const libraryContent = res.default.framework
        console.log(libraryContent)
        const docsLibrary = libraryContent.docs[version]
        console.log(docsLibrary)

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
