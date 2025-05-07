import React from 'react'
import { useChat } from '../../hooks/useChat'

export const ChatHeader = () => {
  const { setIsOpen, resetChat } = useChat()
  const [timeElapsed, setTimeElapsed] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleReset = () => {
    resetChat()
    setTimeElapsed(0)
  }

  return (
    <div className='bg-blue-500 p-4 text-white flex justify-between'>
      {timeElapsed}
      <div className='[&>button]:border-white [&>button]:border-1 [&>button]:px-4 [&>button]:py-1 [&>button]:rounded-sm'>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => setIsOpen(false)} className='ml-6'>Close</button>
      </div>
    </div>
  )
}