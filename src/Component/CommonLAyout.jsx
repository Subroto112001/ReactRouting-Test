import React from 'react'
import NavBar from './CommonComp.jsx/NavBar'
import Fotter from './CommonComp.jsx/Fotter'
import { Outlet } from 'react-router'
const CommonLAyout = () => {
  return (
      <div>
          <NavBar />
          <Outlet/>
          <Fotter/>
    </div>
  )
}

export default CommonLAyout