import { useRouter } from '../hooks/useRouter'
import { ROUTES } from '../context/RouterContext'

export const Sidebar = () => {
  const { setCurrentRoute } = useRouter()

  return (
    <nav className='bg-gray-200 h-full'>
      <ul className='[&>li]:p-4 [&>li]:cursor-pointer'>
        <li onClick={() => setCurrentRoute(ROUTES.APP)}>Apps</li>
        <li onClick={() => setCurrentRoute(ROUTES.DOCUMENTS)}>Documents</li>
      </ul>
    </nav>
  )
}