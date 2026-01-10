import { Outlet } from 'react-router-dom'
import { AppSidebar } from '../cmps/AppSidebar'

export function AppLayout() {
  return (
    <section className="app-layout">
      <AppSidebar />
      <main className="app-main">
        <Outlet />
      </main>
    </section>
  )
}
