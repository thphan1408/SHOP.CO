import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import useViewPort from '@/hooks/useViewPort'
import { cn } from '@/lib/utils'
import { PATHS } from '@/utils/paths'
import React from 'react'

import { useLocation } from 'react-router-dom'
import { ScrollArea } from './ui/scroll-area'

const PathDataNavigation: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

interface INavigationMenu {
  href?: string
  children: React.ReactNode
  className?: string
}
const NavigationMenuLinkComp = ({
  href,
  children,
  className,
}: INavigationMenu) => {
  const location = useLocation()

  const isActive = href === location.pathname
  return (
    <NavigationMenuLink href={href} className={className} active={isActive}>
      {children}
    </NavigationMenuLink>
  )
}

const NavigationMenuComp = () => {
  const width = useViewPort()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] grid-cols-1 gap-3 p-4 md:w-[350px] lg:grid-cols-2 xl:grid-cols-2 lg:w-[600px] ">
              {width < 965 ? (
                <ScrollArea className="h-[270px] w-full">
                  {PathDataNavigation.map((data) => (
                    <ListItem
                      key={data.title}
                      title={data.title}
                      href={data.href}
                    >
                      {data.description}
                    </ListItem>
                  ))}
                </ScrollArea>
              ) : (
                <>
                  {PathDataNavigation.map((data) => (
                    <ListItem
                      key={data.title}
                      title={data.title}
                      href={data.href}
                    >
                      {data.description}
                    </ListItem>
                  ))}
                </>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLinkComp
            href={PATHS.ONSALE}
            className={navigationMenuTriggerStyle()}
          >
            On Sale
          </NavigationMenuLinkComp>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkComp
            href={PATHS.NEWARRIVALS}
            className={navigationMenuTriggerStyle()}
          >
            New Arrivals
          </NavigationMenuLinkComp>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLinkComp
            href={PATHS.BRANDS}
            className={navigationMenuTriggerStyle()}
          >
            Brands
          </NavigationMenuLinkComp>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      {/* <NavigationMenuLinkComp> */}
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
      {/* </NavigationMenuLinkComp> */}
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default NavigationMenuComp
