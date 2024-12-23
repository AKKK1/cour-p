import React from 'react'
import Compoti from '../components/Compoti'

type Props = {}

export default function tricks({}: Props) {
  return (
    <div className="group/rame flex flex-col items-center ">
      <div className="my-20">
        <h1 className="mt-10 text-3xl font-semibold group-hover/rame:text-purple-700  transition-colors duration-350 ease-in-out">
          {' '}
          TRICKS
        </h1>
      </div>
      <div>
        {' '}
        <p className="group/rame-hover:text-red-700 my-8 py-5 bg-blue-700 "> HOLA NEW SKILL </p>
      </div>
      <div className=" h-20 w-20 bg-blue-300 group-hover/rame:bg-purple-200 ease-in-out "> </div>

      <div
        className="flex
        flex-col
        items-center
        justify-center
       
        text-white
        mt-10
        gap-10
        "
      >
        <h1 className="animate-spin">SPINNNER</h1>
        <h1 className="animate-ping">Like</h1>
        <h1 className="animate-pulse">Subscribe</h1>
        <h1 className="animate-bounce">Hit the button</h1>
        <div className="hola">{/* აქ შეგიძლიათ დაამატოთ SVG ან div ელემენტები */}</div>{' '}
      </div>

      <div>
        <div className="w-20 h-10 rounded-lg neon-purple ">as</div>
      </div>

      <Compoti className={'mb-5'} />

      <form className="mt-5 flex w-80 items-center justify-between rounded border border-neutral-400 bg-white p-4">
        <label className=" relative block w-full">
          <input
            type="email"
            className=" peer ring-1 w-full rounded border border-neutral-500 p-2 text-sm transition-shadow focus:border-indigo-500 focus:outline-none
            focus:ring-indigo-500 focus:ring-offset-2"
          />
          <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-white text-black px-0.5 text-sm font-bold transition-transform peer-focus:scale-0">
            {' '}
            email
          </span>
        </label>
      </form>
    </div>
  )
}
