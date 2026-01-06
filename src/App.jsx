import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RouterProtector from './RouterProtectors/RouteProtector'
import { RegisterPage, AdminPage, LoginPage, UserPage } from './pages'
import UsersList from './pages/admin/UsersList'

function App() {

  const routes = createBrowserRouter([
    {
      path : '/',
      element : <LoginPage />
    },
    {
      path : '/register',
      element : <RegisterPage />
    },
    {
      path : 'admin',
      element : <>
      <RouterProtector allowedRoles={["admin"]}>
        <AdminPage />
        </RouterProtector>
      </>,
      children : [
        {
          path : "users",
          element : <UsersList />
        }
      ]
    },
    {
      path : 'user',
      element : <>
      <RouterProtector allowedRoles={["user"]}>
        <UserPage />
      </RouterProtector>
      </>,
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
