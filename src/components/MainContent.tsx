import React from 'react'
import { useRouter } from '../hooks/useRouter'
import { ROUTES } from '../context/RouterContext'
import { Apps } from './Apps'
import { Documents } from './Documents'

export const MainContent = () => {
    const { currentRoute} = useRouter()
    
    const renderContent = () => {
      switch (currentRoute) {
        case ROUTES.APP:
          return <Apps />
        case ROUTES.DOCUMENTS:
          return <Documents />
      }
    }

    return (
      <main>
        {renderContent()}
      </main>
    )

}