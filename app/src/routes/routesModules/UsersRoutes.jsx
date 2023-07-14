import { Route, Routes } from 'react-router-dom'

import { Users } from '@/pages'

export function UsersRoutes() {
  return (
    <Routes>
      <Route path='inicio' element={<Users />} />
    </Routes>
  )
}
