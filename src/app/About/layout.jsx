import React from 'react'
import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
      About Layout
      <Outlet />
    </div>
  )
}

export default React.memo(AboutLayout)
