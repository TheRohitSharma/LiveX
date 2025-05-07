import React from 'react'
import { ChatInput } from './ChatInput'
import { MessageList } from './MessageList'
import { ChatProvider } from '../../context/ChatContext'

export const ChatContainer = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='fixed border-1 bottom-5 right-5'>
      {!isOpen && <button onClick={() => setIsOpen(true)} className='rounded-full w-[40px] h-[40px] bg-blue-500'></button>}
      {isOpen && (<div className='w-[400px] h-[400px] flex flex-col'>
        <ChatProvider>
          <MessageList />
          <ChatInput />
        </ChatProvider>
      </div>)
      }
    </div>
  )
}