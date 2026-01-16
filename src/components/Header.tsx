import "../styles/header.css";
import giddyOSLogo from "../assets/img/giddyOSLogo.png";
import TimeDisplay from "./TimeDisplay";

const MENU_ITEMS = ["Finder", "File", "Edit", "Go", "Help"];
function Header() {
  return (
    <header className="flex justify-between">
      <ul className="flex gap-4">
        <li>
          <img className="header-logo" src={giddyOSLogo} />
        </li>
        {MENU_ITEMS.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <TimeDisplay />
    </header>
  );
}

export default Header;
