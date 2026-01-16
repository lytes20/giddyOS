interface MenuProps {
  items: string[];
}

function Menu({ items }: MenuProps) {
  return (
    <ul className="finder-menu">
      {items.map((item) => (
        <li key={item} className="border-b px-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
