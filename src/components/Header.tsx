import "../styles/header.css";
import giddyOSLogo from "../assets/img/giddyOSLogo.png";
import TimeDisplay from "./TimeDisplay";
import Dropdown from "./DropDown";
import FinderMenu from "./FinderMenu";

const FINDER_MENU_ITEMS = ["About Finder", "Share App...", "Hide Others"];
const FILE_MENU_ITEMS = [
  "New Finder Window",
  "New Folder",
  "Move to Trash",
  "Empty Trash",
  "Close",
];
const EDIT_MENU_ITEMS = ["Undo", "Cut", "Copy", "Paste", "Clear", "Select All"];
const VIEW_MENU_ITEMS = [
  "by Small Icon",
  "by Icon",
  "by List",
  "by Name",
  "by Date",
  "by Size",
  "by Kind",
];
const GO_MENU_ITEMS = [
  "Back",
  "Forward",
  "Applications",
  "Documents",
  "Images",
  "Music",
  "Sites",
  "Videos",
  "Trash",
];
const HELP_MENU_ITEMS = ["Finder Help", "About Finder"];

const MENU_ITEMS = [
  { label: "Finder", body: <FinderMenu menuItems={FINDER_MENU_ITEMS} /> },
  { label: "File", body: <FinderMenu menuItems={FILE_MENU_ITEMS} /> },
  { label: "Edit", body: <FinderMenu menuItems={EDIT_MENU_ITEMS} /> },
  { label: "View", body: <FinderMenu menuItems={VIEW_MENU_ITEMS} /> },
  { label: "Go", body: <FinderMenu menuItems={GO_MENU_ITEMS} /> },
  { label: "Help", body: <FinderMenu menuItems={HELP_MENU_ITEMS} /> },
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
