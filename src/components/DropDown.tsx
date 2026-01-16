import { ReactNode } from "react";
import "../styles/dropdown.css";
interface DropdownProps {
  title: string;
  body: ReactNode;
}
function Dropdown(props: DropdownProps) {
  const { title, body } = props;
  return (
    <div className="dropdown">
      {title}
      <div className="dropdown-content">{body}</div>
    </div>
  );
}

export default Dropdown;
