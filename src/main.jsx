import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './containers/Layout'
import Home from './pages/Home'
import LayoutSider from './containers/LayoutSider'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import './assets/css/index.css'
import Library from './pages/Library'
import Docker from './pages/Docker'
import Cron from './pages/Cron'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />} errorElement={<NotFound />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route element={<LayoutSider />}>
        <Route path='guide' element={<Dashboard />} />
        <Route path='guide/docker' element={<Docker />} />
        <Route path='guide/cron' element={<Cron />} />
      </Route>
      <Route element={<LayoutSider />}>
        <Route path='library' element={<Library />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  < >
    <RouterProvider router={router} />
  </>
)
