import React from 'react'
import { useSearch } from './useSearch'
import { useRouter } from './useRouter'

export const useContentSearch = () => {
  const { currentSearchTerm } = useSearch()
  const [searchMatches, setSearchMatches] = React.useState<string[]>([])
  const { currentContent } = useRouter()

  React.useEffect(() => {
    if (!currentSearchTerm) {
      setSearchMatches([])
      return
    }

    setSearchMatches(currentContent.filter((entry) => entry.includes(currentSearchTerm)))
  }, [currentSearchTerm, currentContent])

  return searchMatches
}