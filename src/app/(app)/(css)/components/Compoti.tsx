import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {}

const Compoti = (className: string) => {
  return (
    <div className={twMerge('py-1 px-6 rounded-md bg-violet-600 text-white', className)}>
      Compoti
    </div>
  )
}

export default Compoti
