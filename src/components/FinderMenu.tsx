interface FinderMenuProps {
  menuItems: string[];
}
function FinderMenu(props: FinderMenuProps) {
  const { menuItems } = props;
  return (
    <div>
      <ul>
        {menuItems.map((item) => (
          <li className="border-b px-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FinderMenu;
