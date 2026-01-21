// Header.tsx
import { useState } from "react";
import "../../styles/header.css";
import giddyOSLogoBlack from "../../assets/images/giddyOSLogoBlack.png";
import giddyOSLogoWhite from "../../assets/images/giddyOSLogoWhite.png";
import TimeDisplay from "../ui/TimeDisplay";
import Dropdown from "../ui/Dropdown";
import Menu from "../ui/Menu";
import { MENUS, OS_MENU, OS_MENU_ACTIONS } from "../../menus/menu.data";
import useBear from "../../stores/osActions";
import useAuthStore from "../../stores/login";

function Header() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const openComputerInfo = useBear((state) => state.openComputerInfo);
  const logout = useAuthStore((state) => state.logout);

  function handleLogout() {
    logout();
  }

  const handleMenuClick = (action: string) => {
    switch (action) {
      case OS_MENU_ACTIONS.SHOW_COMPUTER_INFO:
        openComputerInfo();
        break;

      case OS_MENU_ACTIONS.LOGOUT:
        handleLogout();
        break;

      default:
        break;
    }
  };

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
              content={
                <Menu items={OS_MENU} handleMenuClick={handleMenuClick} />
              }
            />
          </li>

          {/* App Menus */}
          {MENUS.map((menu) => (
            <li key={menu.label}>
              <Dropdown
                trigger={<span className="p-1 menu-label">{menu.label}</span>}
                content={
                  <Menu items={menu.items} handleMenuClick={handleMenuClick} />
                }
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
