import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout
