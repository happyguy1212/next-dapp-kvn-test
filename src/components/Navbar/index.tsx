import { useState } from 'react'
import Link from 'next/link'

import { NavLink, NavLinkComponent } from './NavLink'
import Hamburger from './Hamburger'
import ConnectWallet from './ConnectWallet'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const handleBurgerClick = () => {
    setActive(!active)
  }

  const handleConnect = () => {
    console.log('connect wallet')
  }

  return (
    <div className="navbar mb-2 shadow-lg text-black">
      <div className="flex-none px-2 mx-2">
        <NavLinkComponent href="/">
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6 inline-block" src="./images/logos/logo.png" />
            <span className="text-lg font-bold uppercase">kvn2046</span>
          </div>
        </NavLinkComponent>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex"></div>
      </div>
      <ConnectWallet handleClick={handleConnect} />
      <Hamburger handleClick={handleBurgerClick} />
    </div>
  )
}

export default NavBar
