// Dropdown.tsx
import { ReactNode } from "react";
import "../styles/dropdown.css";

interface DropdownProps {
  /** Element that triggers the dropdown (text, icon, logo, etc.) */
  trigger: ReactNode;

  /** Content shown when dropdown is open */
  content: ReactNode;
}

function Dropdown({ trigger, content }: DropdownProps) {
  return (
    <div className="dropdown">
      <button className="flex items-center" type="button">
        {trigger}
      </button>

      <div className="dropdown-content" role="menu">
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
