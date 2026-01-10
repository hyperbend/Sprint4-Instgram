import { NavLink } from 'react-router-dom'
import { SvgIcon } from './SvgIcon'

export function AppSidebar() {
  return (
    <aside className="app-sidebar">
      <div className="logo">Instagram</div>

      <nav className="side-nav">
        <NavLink to="/" end>
          <SvgIcon name="home" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/explore">
          <SvgIcon name="search" />
          <span>Search</span>
        </NavLink>

        <NavLink to="/explore">
          <SvgIcon name="explore" />
          <span>Explore</span>
        </NavLink>

        <NavLink to="/profile">
          <SvgIcon name="profile" />
          <span>Profile</span>
        </NavLink>
      </nav>

      <button className="more-btn">
        <SvgIcon name="more" />
        <span>More</span>
      </button>
    </aside>
  )
}
