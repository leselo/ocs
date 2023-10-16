import { NavLink, Outlet } from "react-router-dom";
// Root file for React-Router
export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Occupancy Counter Sensor - by ELOSOFT</h1>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/"
          >
            OCS
          </NavLink>
          <NavLink to="About">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
