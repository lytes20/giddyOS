// Header.tsx
import "../styles/header.css";
import giddyOSLogo from "../assets/img/giddyOSLogo.png";
import TimeDisplay from "./TimeDisplay";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import { MENUS, OS_MENU } from "../menus/menu.data";

function Header() {
  return (
    <header className="flex justify-between items-center px-4">
      <nav aria-label="Main menu">
        <ul className="flex gap-4 items-center">
          {/* OS Menu */}
          <li>
            <Dropdown
              trigger={
                <img
                  src={giddyOSLogo}
                  alt="giddyOS logo"
                  className="header-logo"
                />
              }
              content={<Menu items={OS_MENU} />}
            />
          </li>

          {/* App Menus */}
          {MENUS.map((menu) => (
            <li key={menu.label}>
              <Dropdown
                trigger={<span className="menu-label">{menu.label}</span>}
                content={<Menu items={menu.items} />}
              />
            </li>
          ))}
        </ul>
      </nav>

      <TimeDisplay />
    </header>
  );
}

export default Header;
