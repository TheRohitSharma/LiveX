import React from 'react'

type Message = {
  type: 'user' | 'ai'
  text: string
}

type ChatContextType = {
  messages: Message[]
  addMessage: (message: Message[]) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  resetChat: () => void
}

export const ChatContext = React.createContext<ChatContextType>({
  messages: [],
  addMessage: () => { },
  setIsOpen: () => { },
  isOpen: false,
  resetChat: () => { }
})

type ChatContextProps = {
  children: React.ReactNode
}

export const ChatProvider = ({ children }: ChatContextProps) => {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [isOpen, setIsOpen] = React.useState(false)

  const addMessage = (message: Message[]) => {
    setMessages((prevMessages) => {
      return [...prevMessages, ...message]
    })
  }

  const resetChat = () => {
    setMessages([])
  }

  return (
    <ChatContext.Provider value={{
      addMessage,
      messages,
      setIsOpen,
      isOpen,
      resetChat
    }}>
      {children}
    </ChatContext.Provider>
  )
}