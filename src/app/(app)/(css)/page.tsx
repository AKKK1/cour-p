import React, { ReactElement } from 'react'

export default async function page(): Promise<ReactElement> {
  return (
    <div className="h-[calc(100vh-3rem)]">
      <h1>CSS TRICKS</h1>
    </div>
  )
}
