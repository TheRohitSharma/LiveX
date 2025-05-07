import './App.css'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import { RouterProvider } from './context/RouterContext'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <RouterProvider>
      <SearchProvider>
        <div className='grid w-full grid-rows-[auto_1fr]'>
          <Header />
          <main className='grid grid-cols-[200px_1fr] w-full'>
            <Sidebar />
            <MainContent />
          </main>
        </div>
      </SearchProvider>
    </RouterProvider >
  )
}

export default App
