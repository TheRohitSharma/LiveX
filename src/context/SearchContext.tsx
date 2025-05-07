import React from 'react'


type SearchContextType = {
  currentSearchTerm: string
  setSearchTerm: (searchText: string) => void
}

export const SearchContext = React.createContext<SearchContextType>({
  currentSearchTerm: '',
  setSearchTerm: () => { }
})

type SearchContextProps = {
  children: React.ReactNode
}

export const SearchProvider = ({ children }: SearchContextProps) => {
  const [currentSearchTerm, setSearchTerm] = React.useState('')

  return (
    <SearchContext.Provider value={{
      currentSearchTerm,
      setSearchTerm
    }}>
      {children}
    </SearchContext.Provider>
  )
}