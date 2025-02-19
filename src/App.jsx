/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import Aboutaspage from './Pages/aboutas/Aboutaspage'
import Team from './Pages/ourTream/Team'
import Booking from './Pages/Booking/Booking'
import Login from './Pages/Login-Register/Login'
import Register from './Pages/Login-Register/Register'
import Pagenotfound from './Pages/Pagenotfound/Pagenotfound'
import HomeCommp from './Commponet/Home-Commponet/home/Home-Commp'
import Aboutus from './Commponet/Home-Commponet/aboutus/Aboutus'
import ServicePage from './Pages/service/ServicePage'
import Servicedetails from './Pages/serviceDetails/Servicedetails'
import Blogepage from './Pages/Bloge/Blogepage'
import Blogedetpage from './Pages/Bloge/Blogedetpage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Faq from './Pages/FAQ/Faq'
function App() {

  const router = createBrowserRouter([
    {path:'/',element:<HomePage/>},
    {path:'/aboutas',element:<Aboutaspage/>},
    {path:'/team',element:<Team/>},
    {path:'/booking',element:<Booking/>},
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},
    {path:'*',element:<Pagenotfound/>},
    {path:'/service',element:<ServicePage/>},
    {path:'/serviceDetails',element:<Servicedetails/>},
    {path:'/blog',element:<Blogepage/>},
   {path:'/blogDetails',element:<Blogedetpage/>},
   {path:'/FAQ',element:<Faq/>},
  ])

  return (
    <div className="font">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
