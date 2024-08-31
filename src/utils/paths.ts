export const PATHS = {
  HOME: '/',
  ONSALE: '/on-sale',
  NEWARRIVALS: '/new-arrivals',
  BRANDS: '/brands',
  NOT_FOUND: '/not-found',
  SIGNIN: '/login',
  SIGNUP: '/signup',
  SHOPPINGCART: '/shopping-cart',
}

export type PATH = (typeof PATHS)[keyof typeof PATHS]
