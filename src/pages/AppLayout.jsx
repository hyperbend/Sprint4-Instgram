import { Outlet } from 'react-router-dom'
import { AppSidebar } from '../cmps/AppSidebar'

export function AppLayout() {
  return (
    <section className="app-layout">
      <AppSidebar />

      <main className="app-main">
        {/* <div className="main-content"> */}
          <Outlet />
        {/* </div> */}
      </main>
    </section>
  )
}
