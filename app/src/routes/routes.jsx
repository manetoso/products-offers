import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home, NotFound } from '@/pages'
import { Layout } from '@/components/layout'

import {
  UsersRoutes
} from './routesModules'
import { useRouterLists } from '@/hooks/useRouterLists'

export function Router() {
  const { location } = useRouterLists()
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/app' element={<Layout />}>
          <Route path='/app' element={<Home />} />
          <Route
            path='usuarios/*'
            element={<UsersRoutes />}
          />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  )
}
