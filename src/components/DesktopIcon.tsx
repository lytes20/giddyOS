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
  return (
    <div
      className="flex flex-col items-center w-fit cursor-pointer"
      onDoubleClick={onDoubleClick}
    >
      <div className="w-[100px]">
        <img src={icon} className="w-full" />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default DesktopIcon;
