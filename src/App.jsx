import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RouterProtector from './RouterProtectors/RouteProtector'
import { RegisterPage, AdminPage, LoginPage, UserPage, UsersList, DeleteUser, UserDetails, EditDetails, EditAdminDetails } from './pages'



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
      path : '/admin',
      element : <>
      <RouterProtector allowedRoles={["admin"]}>
        <AdminPage />
        </RouterProtector>
      </>,
      children : [
        {
          path : "users",
          element : <UsersList />
        },
        {
          path : "delete",
          element : <DeleteUser />
        }
      ]
    },
    {
      path : '/user',
      element : <>
      <RouterProtector allowedRoles={["user"]}>
        <UserPage />
      </RouterProtector>
      </>,
      children : [
        {
          path : "details",
          element : <UserDetails />
        }
      ]
    },
    {
      path : '/user/update',
      element : <>
      <RouterProtector allowedRoles={["user"]}>
        <EditDetails />
      </RouterProtector>
      </>
    },
    {
      path : '/admin/update',
      element : <>
      <RouterProtector allowedRoles={["admin"]}>
        <EditAdminDetails />
      </RouterProtector>
      </>
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
