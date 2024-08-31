import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import NavigationMenuComp from './navigation-menu'
import * as React from 'react'

const MenuDropDown = () => {
  // const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ghost'}
          className="hover:outline-none focus-visible:ring-0"
        >
          <MenuIcon size={'24'} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`h-[370px] w-full overflow-hidden bg-white rounded-lg shadow-lg`}
      >
        <NavigationMenuComp />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuDropDown
