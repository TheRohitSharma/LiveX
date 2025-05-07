type UserMessageProps = {
  text: string
}

export const UserMessage = ({ text }: UserMessageProps) => {
  return (
    <div className='bg-blue-500 p-4 self-end mb-2 rounded-md text-white'>{text}</div>
  )
}