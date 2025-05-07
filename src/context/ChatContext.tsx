import React from 'react'

type Message = {
  type: 'user' | 'ai'
  text: string
}

type ChatContextType = {
  messages: Message[]
  addMessage: (message: Message[]) => void
}

export const ChatContext = React.createContext<ChatContextType>({
  messages: [],
  addMessage: () => { }
})

type ChatContextProps = {
  children: React.ReactNode
}

export const ChatProvider = ({ children }: ChatContextProps) => {
  const [messages, setMessages] = React.useState<Message[]>([])

  const addMessage = (message: Message[]) => {
    setMessages((prevMessages) => {
      return [...prevMessages, ...message]
    })
  }

  return (
    <ChatContext.Provider value={{
      addMessage,
      messages
    }}>
      {children}
    </ChatContext.Provider>
  )
}