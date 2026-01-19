interface ISystemApp {
  name: string;
  icon: string;
}
interface DesktopIconProps {
  systemApp: ISystemApp;
}

function DesktopIcon(props: DesktopIconProps) {
  const { systemApp } = props;
  const { icon, name } = systemApp;
  return (
    <div className="flex flex-col items-center w-fit">
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
