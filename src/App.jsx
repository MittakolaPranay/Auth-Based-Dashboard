import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RouterProtector from './RouterProtectors/RouteProtector'
import { RegisterPage, AdminPage, LoginPage, UserPage } from './pages'
import Employees from './multiple-fields/Employees'
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
      </>
    },
    {
      path : 'user',
      element : <>
      <RouterProtector allowedRoles={["user"]}>
        <UserPage />
      </RouterProtector>
      </>
    }
  ])

  return <Employees />
}

export default App
