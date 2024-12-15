import React, { ReactElement } from 'react'
import LoginForm from '../(authenticated)/components/LoginForm'

export default async function page(): Promise<ReactElement> {
  return (
    <div className="h-[calc(100vh-3rem)]">
      <LoginForm />
    </div>
  )
}
