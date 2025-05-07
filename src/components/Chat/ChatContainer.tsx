import { ChatInput } from './ChatInput'
import { MessageList } from './MessageList'
import { ChatHeader } from './ChatHeader'
import { useChat } from '../../hooks/useChat'

export const ChatContainer = () => {
  const { isOpen, setIsOpen } = useChat()

  return (
    <div className='fixed bottom-0 right-0 md:bottom-5 md:right-5 flex flex-col'>
      {isOpen && (<div className='md:w-[400px] md:h-[600px] w-full h-full flex flex-col shadow-md rounded-md overflow-hidden border-1 border-gray-200 mb-2'>
        <>
          <ChatHeader />
          <MessageList />
          <ChatInput />
        </>
      </div>)
      }
      <button onClick={() => setIsOpen(true)} className='self-end rounded-full w-[60px] h-[60px] bg-blue-500 text-white cursor-pointer'>Chat</button>
    </div>
  )
}