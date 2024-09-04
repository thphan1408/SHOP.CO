import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import NavigationMenuComp from './navigation-menu'
import { useRef, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside'

const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => {
    setIsOpen(false)
  })
  return (
    <>
      <div className="relative flex flex-col" ref={menuRef}>
        <Button
          variant={'ghost'}
          className="hover:outline-none focus-visible:ring-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon size={'24'} />
        </Button>

        {isOpen && (
          <div className="absolute z-50 top-0 left-0 mt-12 bg-white dark:bg-black">
            <NavigationMenuComp />
          </div>
        )}
      </div>
    </>
  )
}

export default MenuDropDown
