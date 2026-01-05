import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Register, Admin, User } from './pages'
import './App.css'
import AdminRouterProtector from './RouterProtectors/AdminRouteProtector'
import UserRouterProtector from './RouterProtectors/UserRouteProtector'

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Login />
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : 'admin',
      element : <AdminRouterProtector><Admin /></AdminRouterProtector>
    },
    {
      path : 'user',
      element : <UserRouterProtector><User /></UserRouterProtector>
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
