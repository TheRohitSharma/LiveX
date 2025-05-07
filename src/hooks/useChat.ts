import React from 'react'
import { ChatContext } from '../context/ChatContext'

export const useChat = () => {
  const chatContext = React.useContext(ChatContext)

  if (!chatContext) {
    throw new Error('You are trying to use useRouter outside of its provider!')
  }

  const {
    messages,
    addMessage
  } = chatContext

  return {
    messages,
    addMessage
  }
}