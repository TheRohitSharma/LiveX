import React from 'react'
import { useRouter } from '../hooks/useRouter'
import { ROUTES } from '../context/RouterContext'
import { useSearch } from '../hooks/useSearch'
import { useContentSearch } from '../hooks/useContentSearch'


export const MainContent = () => {
  const { currentContent } = useRouter()
  const { currentSearchTerm } = useSearch()
  const searchMatches = useContentSearch()

  const [formattedContent, setFormattedContent] = React.useState([])

  React.useEffect(() => {
    const formatted: any = searchMatches.map((content) => {
      const split = content.split(currentSearchTerm)

      if (split.length > 1) {
        return split.map((chunk, index) => {
          if (index === split.length - 1) {
            return chunk
          }

          return <>{chunk}<span className='bg-yellow-500'>{currentSearchTerm}</span></>
        })
      }

      return content
    })

    setFormattedContent(formatted.length ? formatted : currentContent)
  }, [currentSearchTerm, searchMatches])


  return (
    <main>
      {formattedContent?.map((entry) => {
        return <p>{entry}</p>
      })}
    </main>
  )

}