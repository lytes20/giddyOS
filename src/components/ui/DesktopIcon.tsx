import React from "react";
import useBear from "../../stores/osActions";

interface ISystemApp {
  name: string;
  icon: string;
}
interface DesktopIconProps {
  systemApp: ISystemApp;
  onDoubleClick?: () => void;
}

function DesktopIcon(props: DesktopIconProps) {
  const { systemApp, onDoubleClick } = props;
  const { icon, name } = systemApp;
  const [isFocused, setIsFocused] = React.useState(false);
  const showContextMenu = useBear((state) => state.showContextMenu);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    // Click should also trigger focus for accessibility
  };

  const handleDoubleClick = () => {
    onDoubleClick?.();
  };

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default browser context menu
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    showContextMenu(name, { x, y });
  };

  return (
    <div
      className="flex flex-col items-center w-fit cursor-pointer focus:outline-none"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleRightClick}
    >
      <div className="w-[100px]">
        <img src={icon} className="w-full" />
      </div>
      <div>
        <p className={isFocused ? "bg-black text-white px-1 rounded" : ""}>
          {name}
        </p>
      </div>
    </div>
  );
}

export default DesktopIcon;
