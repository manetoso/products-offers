import { useLocation } from 'react-router-dom'

export const useRouterLists = () => {
  const location = useLocation()
  return {
    location
  }
}
