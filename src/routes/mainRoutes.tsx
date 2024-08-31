import MainLayout from '@/layouts/MainLayout'
import { Home, NotFound, ServerInternalPage } from '@/pages'
import { PATHS } from '@/utils/paths'

const mainRoutes = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: PATHS.HOME,
        element: <Home />,
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
