import Wrapper from '@/components/shared/Wrapper'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <Wrapper>
      <main className="flex flex-col gap-y-6 sm:gap-y-8 items-center justify-center 
                       min-h-[60vh] sm:min-h-[70vh] text-center px-4">

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold">
          404 Not Found
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-md">
          Your visited page was not found. You may return to the home page.
        </p>

        <Link href="/">
          <button className="bg-[#DB4444] text-white cursor-pointer
                             py-2.5 px-5 sm:px-6 
                             text-sm sm:text-base
                             rounded-sm hover:bg-[#c73b3b] 
                             transition">
            Back to Home Page
          </button>
        </Link>

      </main>
    </Wrapper>
  )
}

export default NotFound