import React from 'react'

type AIMessageProps = {
  text: string
}

export const AIMessage = ({ text }: AIMessageProps) => {
  return (
    <div className='bg-gray-200 p-4 self-start mb-2 rounded-md text-black'>{text}</div>
  )
}