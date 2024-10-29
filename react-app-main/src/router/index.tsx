import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import Profile from '../views/Profile'
import Settings from '../views/Settings'
import Dashboard from '../views/Dashboard'
import SubAppContainer from '../views/SubAppContainer'
import NotFound from '../views/NotFound'

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/app-sub/*',
    element: <SubAppContainer />
  },
  {
    path: '*',
    element: <NotFound />,
  }
]

const router = createBrowserRouter(routes, {
  basename: "/react-app"
})

export default router
