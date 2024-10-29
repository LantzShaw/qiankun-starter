import {  Outlet, RouterProvider } from 'react-router-dom'
// import { routes } from './router'
import router from './router'


// const router = createBrowserRouter(routes, {
//   basename: window.__POWERED_BY_QIANKUN__ ?  '/' :  '/react-app',
// })

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  )
}

export default App
