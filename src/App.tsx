import ThemeRoutes from './routes'
import { PageHelmet } from './utils/helmetPage'

function App() {
  const routes = ThemeRoutes()

  return (
    <>
      <PageHelmet />
      {routes}
    </>
  )
}

export default App
