import MainLayout from '@/layouts/MainLayout'
import {
  HomePage,
  NotFound,
  ServerInternalPage,
  OnSalePage,
  NewArrivalsPage,
} from '@/pages'
import BrandsPage from '@/pages/brands/brands'

import { PATHS } from '@/utils/paths'

const mainRoutes = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.ONSALE,
        element: <OnSalePage />,
      },
      {
        path: PATHS.NEWARRIVALS,
        element: <NewArrivalsPage />,
      },
      {
        path: PATHS.BRANDS,
        element: <BrandsPage />,
      },
    ],
  },
  {
    path: '*',
    errorElement: <ServerInternalPage />,
    element: <NotFound />,
  },
]

export default mainRoutes
