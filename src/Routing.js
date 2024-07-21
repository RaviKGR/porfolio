import React from 'react'
import { useRoutes } from 'react-router-dom'
import DashBoard from './Components/DashBoard'

const Routing = () => {
  return useRoutes([
    {path: '/', element: <DashBoard /> }
  ])
}

export default Routing