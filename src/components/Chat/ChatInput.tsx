import React from 'react'
import { useChat } from '../../hooks/useChat'

export const ChatInput = () => {
  const { addMessage } = useChat()
  const [messageText, setMessageText] = React.useState('')

  const handleAddMessage = () => {
    addMessage([{
      type: 'user',
      text: messageText
    }])

    setTimeout(() => {
      addMessage([{
        type: 'ai',
        text: 'This a delayed mock response.'
      }])
    }, 1000)

    setMessageText('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='flex justify-between w-full p-2 py-4 border-t-1 border-t-gray-200'>
      <input value={messageText} onChange={handleInputChange} className='flex-1 bg-white mr-4 border-1' type='text' />
      <button onClick={handleAddMessage} className='bg-blue-500 text-white py-2 px-4'>Send</button>
    </form>
  )
}