// Header.tsx
import { useState } from "react";
import "../styles/header.css";
import giddyOSLogoBlack from "../assets/img/giddyOSLogoBlack.png";
import giddyOSLogoWhite from "../assets/img/giddyOSLogoWhite.png";
import TimeDisplay from "./TimeDisplay";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import { MENUS, OS_MENU } from "../menus/menu.data";

function Header() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  return (
    <header className="flex justify-between items-center px-4">
      <nav aria-label="Main menu">
        <ul className="flex gap-2 items-center">
          {/* OS Menu */}
          <li
            className={isLogoHovered ? "logo-hover" : ""}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <Dropdown
              trigger={
                <img
                  src={isLogoHovered ? giddyOSLogoWhite : giddyOSLogoBlack}
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
                trigger={<span className="p-1 menu-label">{menu.label}</span>}
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
