import React from 'react'

const Header = () => {

  return (
    <header className='relative z-[999]'>
      <HeaderItem />



    </header>
  )
}

const HeaderItem = () => {
  return (
    <div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-2 border-white border-opacity-40 
          bg-none bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] 
          sm:w-[36rem] sm:rounded-full -translate-x-1/2"
        />
  )
}

export default Header

