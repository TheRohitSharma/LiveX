import './App.css'
import { ChatContainer } from './components/Chat/ChatContainer'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import { ChatProvider } from './context/ChatContext'
import { RouterProvider } from './context/RouterContext'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <>
      <RouterProvider>
        <SearchProvider>
          <div className='grid w-full grid-rows-[auto_1fr] h-screen'>
            <Header />
            <main className='grid grid-cols-[200px_1fr] w-full'>
              <Sidebar />
              <MainContent />
            </main>
          </div>
        </SearchProvider>
      </RouterProvider >
      <ChatProvider>
        <ChatContainer />
      </ChatProvider>
    </>
  )
}

export default App
