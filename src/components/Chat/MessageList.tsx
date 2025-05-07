import { useChat } from '../../hooks/useChat'
import { UserMessage } from './UserMessage'
import { AIMessage } from './AIMessage'

export const MessageList = () => {
  const { messages } = useChat()

  const renderMessages = () => {
    return messages.map((message, index) => {
      switch (message.type) {
        case 'user':
          return <UserMessage key={index} text={message.text} />
        case 'ai':
          return <AIMessage key={index} text={message.text} />
      }
    })

  }

  return (
    <div className='flex flex-col flex-1 bg-white p-4'>
      {renderMessages()}
    </div>
  )
}