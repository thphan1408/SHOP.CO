import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PATHS } from './paths'

interface HelmetConfig {
  path: string
  title: string
}

const helmetConfig: HelmetConfig[] = [
  { path: '/', title: 'Home - SHOP.CO' },
  { path: '/contact', title: 'Contact - SHOP.CO' },
  { path: '/about', title: 'About - SHOP.CO' },
  { path: '/sign-up', title: 'Sign Up - SHOP.CO' },
  { path: '/wishlist', title: 'Wishlist - SHOP.CO' },
  { path: '/cart', title: 'Cart - SHOP.CO' },
  { path: PATHS.SIGNIN, title: 'Login - SHOP.CO' },
]

export const PageHelmet: React.FC = () => {
  const path = window.location.pathname
  const currentConfig = helmetConfig.find((config) => config.path === path)

  return (
    <Helmet>
      <title>{currentConfig ? currentConfig.title : 'Flipmart'}</title>
    </Helmet>
  )
}
