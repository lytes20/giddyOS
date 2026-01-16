import "../styles/header.css";
const MENU_ITEMS = ["Finder", "File", "Edit", "Go", "Help"];
function Header() {
  return (
    <header className="">
      <ul className="flex gap-4">
        {MENU_ITEMS.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
