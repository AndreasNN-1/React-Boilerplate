
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LayoutAdmin from './layout/admin/LayoutAdmin'
import HomeAdmin from './pages/admin/HomeAdmin'
import NewsAdmin from './pages/admin/NewsAdmin'

// CSS
import './App.css'


function App () {

  const router = createBrowserRouter(

    [
      {
        // PUBLIC - layout
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
          { path: "/", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
        ]
      },
      {
        // ADMIN - layoutadmin
        element: <LayoutAdmin />,
        errorElement: <PageNotFound />,
        children: [
          { path: "/admin", element: <HomeAdmin /> },
          { path: "admin/news", element: <NewsAdmin /> },
        ]
      }
    ]
  )



  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
