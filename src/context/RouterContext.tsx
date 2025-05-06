import React from 'react'

export const ROUTES = {
    APP: 'app',
    DOCUMENTS: 'documents'
}

type RouterContextType = {
    currentRoute: string
    setCurrentRoute: (route: string) => void
}

export const RouterContext = React.createContext<RouterContextType>({
    currentRoute: ROUTES.APP,
    setCurrentRoute: () => {}
})

type RouterContextProps = {
    children: React.ReactNode
}

export const RouterProvider = ({ children }: RouterContextProps) => {
    const [currentRoute, setCurrentRoute] = React.useState(ROUTES.APP)
    
    return (
        <RouterContext.Provider value={{
            currentRoute,
            setCurrentRoute
        }}>
            {children}
        </RouterContext.Provider>
    )
}