import React from 'react'
import { RouterContext } from '../context/RouterContext'

export const useRouter = () => {
  const routerContext = React.useContext(RouterContext)

  if (!routerContext) {
    throw new Error('You are trying to use useRouter outside of its provider!')
  }

  return routerContext
}