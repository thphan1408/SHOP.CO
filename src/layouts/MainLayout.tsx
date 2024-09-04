import Footer from '@/components/footer'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
