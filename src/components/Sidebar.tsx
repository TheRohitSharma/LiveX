import React from 'react'
import { useRouter } from '../hooks/useRouter'
import { ROUTES } from '../context/RouterContext'

export const Sidebar = () => {
  const { setCurrentRoute } = useRouter()

  return (
    <section>
      <ul>
        <li onClick={() => setCurrentRoute(ROUTES.APP)}>Apps</li>
        <li onClick={() => setCurrentRoute(ROUTES.DOCUMENTS)}>Documents</li>
      </ul>
    </section>
  )
}