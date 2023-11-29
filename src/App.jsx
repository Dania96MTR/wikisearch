import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Favourites from './Pages/favourite/Favourites.jsx'
import ErrorPage from './Pages/Error/ErrorPage.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
