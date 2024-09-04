import { PATHS } from '@/utils/paths'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SearchIcon, ShoppingCart, User, X } from 'lucide-react'
import { cn } from '@/lib/utils'

import MenuDropDown from './menu-dropdown'
import { Input } from './ui/input'
import { ModeToggle } from './mode-toggle'
import { AnimatePresence, motion } from 'framer-motion'
import NavigationMenuComp from './navigation-menu'

const TopBar = () => {
  const [isClosed, setIsClosed] = React.useState<boolean>(true)

  return (
    <AnimatePresence>
      {isClosed && (
        <motion.div
          key="topbar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black dark:bg-slate-900"
        >
          <div className="container mx-auto py-4 text-white flex items-center justify-center h-full">
            <span className="text-center flex-1">
              Sign up and get 20% off to your first order.
              <Link to="/signup" className="underline ml-2">
                Sign Up Now
              </Link>
            </span>
            <Button
              variant="ghost"
              onClick={() => setIsClosed(false)}
              className="hover:bg-transparent  focus:outline-none hover:text-white pr-2"
            >
              <X />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Header = () => {
  const [isHiddenInput, setIsHiddenInput] = React.useState<boolean>(false)
  return (
    <header className="sticky top-0 z-40">
      <TopBar />
      <div className="sm:container md:mx-auto py-[31px]">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex">
            <div className="lg:hidden">
              <MenuDropDown />
            </div>

            <div className="">
              <Link to={PATHS.HOME}>
                <span className="font-bold text-2xl md:text-[32px]">
                  SHOP.CO
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <NavigationMenuComp />
          </div>

          <div className="hidden w-[577px] h-12 bg-[#F0F0F0] rounded-3xl xl:flex items-center">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 p-2 ml-4"
            >
              <SearchIcon size={'24'} color="#000000" />
            </Button>

            <Input
              className="w-full focus-visible:ring-0 shadow-none border-0 text-base"
              placeholder="Search for products"
            />
          </div>

          <div className="flex justify-end items-center space-x-2">
            <Input
              className={cn('w-full xl:hidden', { hidden: !isHiddenInput })}
              placeholder="Search for products"
            />
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 p-2 xl:hidden"
              onClick={() => setIsHiddenInput(!isHiddenInput)}
            >
              <SearchIcon size={'24'} />
            </Button>

            <Link
              to={PATHS.SHOPPINGCART}
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 px-2"
            >
              <ShoppingCart size={'24'} />
            </Link>

            <Link
              to={PATHS.SIGNIN}
              className="bg-transparent hover:bg-transparent focus-visible:ring-0 px-2"
            >
              <User size={'24'} />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
