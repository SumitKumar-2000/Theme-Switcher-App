import { Cn } from '@/lib/utils/Cn'
import React from 'react'

const Title = ({children, className}) => {
  return (
    <h1 className={Cn("text-2xl font-bold text-primary-foreground", className)}>
      {children}
    </h1>
  )
}

export default Title
