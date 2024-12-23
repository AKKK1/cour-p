import { redirect } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = async ({ children }) => {
  return <>{children}</>
}

export default Layout
