import React from 'react'
import { SearchContext } from '../context/SearchContext'

export const useSearch = () => {
  const searchContext = React.useContext(SearchContext)

  if (!searchContext) {
    throw new Error('You are trying to use useSearch outside of its provider!')
  }

  return searchContext
}