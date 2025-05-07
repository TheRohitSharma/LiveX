import React from 'react'
import { CONTENT } from '../constants/content'

type ROUTE_KEYS = 'APP' | 'DOCUMENTS'

export const ROUTES: { [key: string]: ROUTE_KEYS } = {
    APP: 'APP',
    DOCUMENTS: 'DOCUMENTS'
}

type RouterContextType = {
    currentRoute: string
    setCurrentRoute: (route: ROUTE_KEYS) => void
    currentContent: string[]
}

export const RouterContext = React.createContext<RouterContextType>({
    currentRoute: ROUTES.APP,
    setCurrentRoute: () => { },
    currentContent: CONTENT['APP']
})

type RouterContextProps = {
    children: React.ReactNode
}

export const RouterProvider = ({ children }: RouterContextProps) => {
    const [currentRoute, setCurrentRoute] = React.useState(ROUTES.APP)

    return (
        <RouterContext.Provider value={{
            currentRoute,
            setCurrentRoute,
            currentContent: CONTENT[currentRoute]
        }}>
            {children}
        </RouterContext.Provider>
    )
}