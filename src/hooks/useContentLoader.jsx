import { useEffect, useState, useContext } from 'react'
import { DocumentContext } from '../App'

export const useContentLoader = (initialVersion = 'v1') => {
  const { documents, getDocument } = useContext(DocumentContext)
  console.log(documents)
  const [version, setVersion] = useState(initialVersion)

  const getDocuments = (list) => {
    list.forEach((url) => getDocument(url))
  }

  const getContentWeb = () => {
    import(`../content.json`)
      .then(res => {
        const libraryContent = res.default.framework

        const descLibrarydec = libraryContent.desc
        console.log(descLibrarydec)
        const docsLibrary = libraryContent.docs[version]
        const docsLibraryConte = libraryContent.docs
        console.log(docsLibraryConte)
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
    documents,
  }
}
