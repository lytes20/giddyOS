import React from "react";

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

  return (
    <div
      className="flex flex-col items-center w-fit cursor-pointer focus:outline-none"
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
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
