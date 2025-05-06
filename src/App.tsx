import './App.css'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import { RouterProvider } from './context/RouterContext'

function App() {
  return (
    <div className='grid w-full grid-rows-[auto_1fr]'>
      <div className='bg-white p-4 w-full flex justify-between shadow-md'>
        <div>Chatbot</div>
        <input className='bg-white border-1 rounded-sm' type='text' />
      </div>
      <main className='grid grid-cols-[200px_1fr] w-full'>
        <RouterProvider>
          <Sidebar />
          <MainContent />
        </RouterProvider>
      </main>
    </div>
  )
}

export default App
