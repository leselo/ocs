import { NavLink, Outlet } from "react-router-dom";
// Root file for React-Router
export default function RootLayout() {
  return (
    <div>
      <header>
        <nav className="bgw50cb">
          <h1 style={{ background: "yellow", color: "black" }}>
            Occupancy Counter Sensor
          </h1>
          <span>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
            >
              OCS
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="About"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="Contact"
            >
              Contact
            </NavLink>
          </span>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <br />
      <div className="footer">
        This site was developed by Laszlo Elo with ReactJS 2023
      </div>
    </div>
  );
}
