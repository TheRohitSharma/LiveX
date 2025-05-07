import React from 'react'
import { useSearch } from '../hooks/useSearch'

export const Header = () => {
  const { setSearchTerm } = useSearch()

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  return (
    <div className='bg-white p-4 w-full flex justify-between shadow-md'>
      <div>Chatbot</div>
      <input onChange={handleSearchInput} className='bg-white border-1 rounded-sm' type='text' />
    </div>
  )
}