import { MenuItem } from "../menus/menu.types";

interface MenuProps {
  items: MenuItem[];
  handleMenuClick: (action: string) => {}
}

function Menu({ items, handleMenuClick }: MenuProps) {

  return (
    <ul className="">
      {items.map(({ name, action }) => (
        <li key={name} className="border-b">
          <button className="dropdown-menu-item px-2" onClick={() => handleMenuClick(action)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
