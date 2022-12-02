import React from 'react'
import { LogoApp, Notifications } from '../../components'

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-sm m-auto px-2">
        <LogoApp />
        <div className="flex items-center gap-[2rem]">
          <Notifications />
          <div>
            <img
              src="/img/user.jpg"
              className="w-[3.2rem] h-[3.2rem] object-cover rounded-full border border-4 border-yellow-500"
            />
          </div>
        </div>
      </header>
  )
}

export default Header