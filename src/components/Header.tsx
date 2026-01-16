import "../styles/header.css";
import giddyOSLogo from "../assets/img/giddyOSLogo.png";
import TimeDisplay from "./TimeDisplay";
import Dropdown from "./DropDown";
import FinderMenu from "./FinderMenu";

const FINDER_MENU_ITEMS = ["About Finder", "Share App...", "Hide Others"];
const MENU_ITEMS = [
  { label: "Finder", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
  { label: "File", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
  { label: "Edit", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
  { label: "Go", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
  { label: "Help", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
];
function Header() {
  return (
    <header className="flex justify-between items-center px-4">
      <ul className="flex gap-4 items-center">
        <li>
          <img className="header-logo" src={giddyOSLogo} />
        </li>
        {MENU_ITEMS.map(({ label, body }) => (
          <li>
            <Dropdown title={label} body={body} />
          </li>
        ))}
      </ul>
      <TimeDisplay />
    </header>
  );
}

export default Header;
